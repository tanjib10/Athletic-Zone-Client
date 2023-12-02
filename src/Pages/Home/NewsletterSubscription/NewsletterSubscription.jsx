import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const NewsletterSubscription = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubscribe = () => {
    axiosPublic.post("/subscribers", formData).then((res) => {
      if (res.data.insertedId) {
        console.log("added to db");
        Swal.fire({
          icon: "success",
          title: "Subscription Letter sent",
        });
        navigate("/");
      }
    });
    console.log("Subscribe:", formData);
    setFormData({ name: "", email: "" });
  };
  return (
    <section className="my-16 py-16 bg-gradient-to-r from-white to-[#F0ECE5]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Subscribe to Our Newsletter
        </h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-[#161A30]"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-[#161A30]"
              placeholder="Your Email"
            />
          </div>
          <button
            onClick={handleSubscribe}
            className="w-full bg-[#161A30] text-white p-3 rounded-md hover:bg-[#31304D] transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
