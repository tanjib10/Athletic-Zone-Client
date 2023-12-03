import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const staticUserData = {
          id: id,
          name: "John Doe",
          photo: "https://example.com/photo.jpg",
          email: "john.doe@example.com",
          role: "member",
        };
        setUserData(staticUserData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    Swal.fire({
      title: "Profile Updated!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md my-16">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="photo"
          className="block text-sm font-medium text-gray-600"
        >
          Photo URL:
        </label>
        <input
          type="text"
          id="photo"
          value={userData.photo}
          onChange={(e) => handleChange("photo", e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={userData.email}
          disabled
          className="mt-1 p-2 w-full border rounded-md bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-600"
        >
          Role:
        </label>
        <input
          type="text"
          id="role"
          value={userData.role}
          readOnly
          className="mt-1 p-2 w-full border rounded-md bg-gray-100"
        />
      </div>

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
