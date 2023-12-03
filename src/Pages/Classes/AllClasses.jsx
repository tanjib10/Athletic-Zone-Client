import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);
  return (
    <div className="container mx-auto my-8 p-4 lg:p-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#31304D]">
        All Classes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white rounded-lg w-80 shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-700">
              {classItem.name}
            </h3>
            <p className="text-gray-600 mb-4">{classItem.description}</p>

            <div className="flex justify-between items-center">
              <Link
                to={`/class/${classItem._id}`}
                className="bg-indigo-500 text-white py-2 px-4 rounded-md inline-block hover:bg-indigo-600 transition duration-300"
                style={{ backgroundColor: "#31304D" }}
              >
                View Details
              </Link>

              <Link
                to="/trainer"
                className="btn bg-[#B6BBC4] text-center"
                style={{ color: "#31304D" }}
              >
                Join Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
