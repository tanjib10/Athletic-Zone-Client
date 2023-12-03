import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const [classItem, setClassItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${id}`)
      .then((res) => res.json())
      .then((data) => setClassItem(data));
  }, [id]);

  return (
    <div className="container mx-auto mt-8 p-4 lg:p-8">
      {classItem ? (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">
            {classItem.name} Class Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg font-bold mb-2 text-gray-700">
                Instructor: {classItem.instructor}
              </p>
              <p className="text-gray-700 mb-2">
                Schedule: {classItem.schedule}
              </p>
              <p className="text-gray-700 mb-2">
                Duration: {classItem.duration}
              </p>
              <p className="text-gray-700 mb-2">
                Location: {classItem.location}
              </p>
              <p className="text-gray-600 mb-4">{classItem.description}</p>

              <Link
                to="/trainer"
                className="btn text-center bg-gray-700 text-white py-4 px-4 rounded-md inline-block hover:bg-gray-800 transition duration-300"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading class details...</p>
      )}
    </div>
  );
};

export default ClassDetails;
