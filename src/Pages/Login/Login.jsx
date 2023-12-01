/* eslint-disable no-undef */
import { useContext } from "react";
import loginImg from "../../assets/4957136_4957136.jpg";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        //add info in db
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: "member",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully Logged in!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Email and Password did not match",
        });
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully Logged in!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Email and Password did not match",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Athletic Zone | Login</title>
      </Helmet>
      <h3 className="text-center text-2xl font-bold mt-8 mb-4">
        Please Login Here
      </h3>
      <div className="hero min-h-screen">
        <div className="flex justify-between">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-3/6 shadow-xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="flex justify-center items-center mt-2">
                <button className="btn flex-1 text-white bg-[#161A30]">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="flex-1 btn text-white bg-[#31304D]"
                >
                  Google
                </button>
              </div>
              <p className="mt-2 text-sm lg:text-base">
                Do not have an account?{" "}
                <Link className="text-blue-500" to="/register">
                  Register here.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
