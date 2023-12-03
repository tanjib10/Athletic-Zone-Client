import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/trainers");
        const data = await response.json();
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer._id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={trainer.profileImage}
                alt={trainer.name}
                className="w-full h-60 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-2">
                Years of Experience: {trainer.experience}
              </p>
              <p className="text-gray-600 mb-2">
                Available Slots: {trainer.availableSlots}
              </p>
              <div className="mb-4">
                <span className="flex">
                  {" "}
                  <FaTwitter className="text-2xl text-blue-400 mr-2 cursor-pointer"></FaTwitter>
                  <FaFacebook className="text-2xl text-blue-700 cursor-pointer"></FaFacebook>
                </span>
              </div>
              <Link to={`/trainer/${trainer._id}`}>
                <button className="btn bg-[#31304D] text-white py-2 px-4 rounded-md hover:bg-[#31304D] transition duration-300">
                  Know More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4 text-[#161A30]">
          Ready to Inspire Others?
        </h2>
        <p className="text-gray-600 mb-6">
          Join our team of passionate trainers and help others achieve their
          fitness goals.
        </p>
        <Link
          to="/becomeTrainer"
          className="btn w-1/4 h-24  bg-[#F76D57] text-xl font-bold text-white  px-6 rounded-lg lg:rounded-full hover:bg-[#B6BBC4] transition duration-300"
        >
          Become a Trainer
        </Link>
      </div>
    </section>
  );
};

export default Trainers;
