import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Featured = () => {
  const [data, setData] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      });
  }, [controls]);

  return (
    <div className="my-16">
      <h3 className="text-center text-[#31304D] text-4xl font-bold mb-10">
        Our Features
      </h3>
      <motion.div
        className="ml-20 lg:ml-14 grid grid-cols-1 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="card w-64 h-80 bg-base-100 shadow-xl"
            whileHover={{ scale: 1.2 }}
          >
            <figure className="px-10 pt-10">
              <motion.img
                src={item.imageSrc}
                alt="Shoes"
                className="rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <h2 className="text-sm">{item.description}</h2>
              <p></p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Featured;
