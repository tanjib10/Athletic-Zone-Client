/* eslint-disable react/jsx-no-undef */
import { useContext } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";

const Activity = () => {
  // const [user, setUser] = useState("");
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch("https://athletic-zone-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) =>n setUser(data));
  //
  // }, []);
  console.log(user);
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center my-8">Activity Log</h2>

      <section className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-xl font-bold mb-4">
          Today Activity - {new Date().toLocaleDateString()}
        </h3>

        <div className="mb-4">
          <img src={user.photoURL} alt="" />
          <h4 className="text-lg font-bold mb-2">Personal Information:</h4>
          <p>
            <strong>Name:</strong> {user.displayName}
          </p>
          <p>
            <strong>Member id:</strong> {user.uid}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Trainer Information:</h4>
          {/* <p>Current Trainer: {user.trainerInfo.name}</p> */}
          {/* <p>Trainer Contact: {user.trainerInfo.contact}</p> */}
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Training Session:</h4>
          {/* <p>Training Time Slot: {user.trainingSession.timeSlot}</p> */}
          {/* <p>Training Program: {user.trainingSession.program}</p> */}
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Additional Information:</h4>
          {/* <p>Notes from Trainer: {user.additionalInfo.notes}</p> */}
          {/* <p>Progress Report: {user.additionalInfo.progressReport}</p> */}
          {/* <p>Next Session Plan: {user.additionalInfo.nextSessionPlan}</p> */}
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Feedback:</h4>
          <p>
            How do you feel after todays workout?{" "}
            {/* {user.feedback.feelAfterWorkout} */}
          </p>
          {/* <p>Rate todays session (1-10): {user.feedback.rating}</p> */}
        </div>
      </section>
    </div>
  );
};

export default Activity;
