/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState({});

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        const response = await fetch(
          `https://athletic-zone-server.vercel.app/api/trainers/${id}`
        );
        const data = await response.json();
        setTrainer(data);
      } catch (error) {
        console.error("Error fetching trainer details:", error);
      }
    };

    fetchTrainerDetails();
  }, [id]);

  const renderAvailableSlots = () => {
    if (!trainer || trainer.availableSlots === 0) {
      return (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Available Slots</h3>
          <p className="text-gray-500">No available slots</p>
        </div>
      );
    }

    return (
      <div className="mt-8">
        <h3 className="text-2xl text-center font-bold mb-4">Available Slots</h3>
        <Link to={`/user-booked/${trainer._id}`}>
          <div className="w-full btn bg-gray-200 rounded-md">
            <button className="text-center text-lg font-semibold text-blue-700">
              {trainer.availableSlots}
            </button>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16">
      {trainer ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">
            {trainer.name} Details
          </h2>
          <div className="flex justify-center">
            <img
              src={trainer.profileImage}
              alt={trainer.name}
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
          </div>
          <p className="text-gray-600 text-center mb-4">
            <span className="text-blue-500 font-bold">Experience:</span>{" "}
            {trainer.experience} years
          </p>
          <div className="flex justify-center mb-4">
            <span className="flex">
              <FaTwitter className="text-blue-400 mr-2 cursor-pointer" />
              <FaFacebook className="text-blue-700 cursor-pointer" />
            </span>
          </div>
          {renderAvailableSlots()}
        </div>
      ) : (
        <p className="text-center text-xl">Loading...</p>
      )}
    </div>
  );
};

export default TrainerDetails;
