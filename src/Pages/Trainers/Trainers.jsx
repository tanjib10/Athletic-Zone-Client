import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const sectionControls = useAnimation();
  const trainersControls = useAnimation();

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch(
          "https://athletic-zone-server.vercel.app/api/trainers"
        );
        const data = await response.json();
        setTrainers(data);
        sectionControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        });
        trainersControls.start({
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        });
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, [sectionControls, trainersControls]);

  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={sectionControls}
    >
      <Helmet>
        <title>Athletic Zone | Trainers</title>
      </Helmet>
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-[#161A30]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Trainers
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={trainersControls}
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer._id}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.img
                src={trainer.profileImage}
                alt={trainer.name}
                className="w-full h-60 object-cover mb-4 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.h3
                className="text-lg font-semibold mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {trainer.name}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Years of Experience: {trainer.experience}
              </motion.p>
              <motion.p
                className="text-gray-600 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Available Slots: {trainer.availableSlots}
              </motion.p>
              <motion.div
                className="mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.span className="flex">
                  {" "}
                  <FaTwitter className="text-2xl text-blue-400 mr-2 cursor-pointer"></FaTwitter>
                  <FaFacebook className="text-2xl text-blue-700 cursor-pointer"></FaFacebook>
                </motion.span>
              </motion.div>
              <Link
                to={`/trainer/${trainer._id}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.button className="btn bg-[#31304D] text-white py-2 px-4 rounded-md hover:bg-[#31304D] transition duration-300">
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="text-center py-16"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-[#161A30]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Inspire Others?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join our team of passionate trainers and help others achieve their
          fitness goals.
        </motion.p>
        <Link
          to="/becomeTrainer"
          className="btn w-1/4 h-24  bg-[#F76D57] text-xl font-bold text-white  px-6 rounded-lg lg:rounded-full hover:bg-[#B6BBC4] transition duration-300"
        >
          Become a Trainer
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Trainers;
