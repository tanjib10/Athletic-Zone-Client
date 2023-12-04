import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("https://athletic-zone-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);

  return (
    <div className="container mx-auto my-8 p-4 lg:p-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#31304D]">
        Recommended Classes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={classItem.image || "https://via.placeholder.com/300"}
              alt={classItem.name}
              className="w-full h-40 object-cover object-center"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-indigo-700">
                {classItem.name}
              </h3>
              <p className="text-gray-600 mb-4">{classItem.description}</p>

              <div className="flex justify-between items-center">
                <Link
                  to={`/classes/${classItem._id}`}
                  className="bg-indigo-200 text-black py-2 px-4 rounded-md inline-block hover:bg-indigo-600 transition duration-300"
                >
                  View Details
                </Link>

                <Link
                  to="/trainer"
                  className="bg-[#B6BBC4] text-center py-2 px-4 rounded-md inline-block hover:bg-gray-300 transition duration-300"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
