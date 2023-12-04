/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
// import { useParams } from "react-router-dom"
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Packages = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinNow = () => {
    const postData = {
      selectedPlan: selectedPlan,
      userEmail: user.email,
      trainerId: id,
    };

    fetch("https://athletic-zone-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "slot booked successfully!",
        });
        console.log("Booking successful:", data);
      })
      .catch((error) => {
        console.error("Error booking:", error);
      });
  };

  const planDetails = {
    Silver: {
      facilities: ["Access to basic gym equipment", "Locker room access"],
      price: "$19.99/month",
    },
    Gold: {
      facilities: [
        "Access to premium gym equipment",
        "Locker room access",
        "Sauna and steam room",
      ],
      price: "$29.99/month",
    },
    Diamond: {
      facilities: [
        "Access to ultimate gym equipment",
        "Locker room access",
        "Sauna and steam room",
        "Personal trainer sessions",
      ],
      price: "$49.99/month",
    },
  };
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#31304D]">
        Choose Your Membership Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Silver", "Gold", "Diamond"].map((plan) => (
          <div
            key={plan}
            className="text-center bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4">{plan} Plan</h3>
            <ul className="text-gray-600 mb-4">
              {planDetails[plan].facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <p className="text-3xl font-bold mb-4 text-blue-500">
              {planDetails[plan].price}
            </p>
            <button
              className={`btn bg-blue-500 text-white ${
                selectedPlan === plan && "opacity-80 cursor-not-allowed"
              }`}
              onClick={() => setSelectedPlan(plan)}
              disabled={selectedPlan === plan}
            >
              {selectedPlan === plan ? "Selected" : "Join Now"}
            </button>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8 text-center">
          <button
            className="btn bg-blue-500 text-white"
            onClick={handleJoinNow}
          >
            Join Now for {selectedPlan} Plan
          </button>
        </div>
      )}
    </div>
  );
};

export default Packages;
