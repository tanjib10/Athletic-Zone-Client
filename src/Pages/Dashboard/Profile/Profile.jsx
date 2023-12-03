import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Profile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User data updated successfully!");
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile Update</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Photo URL:</label>
        <input
          type="text"
          id="photo"
          value={userData?.photo}
          onChange={(e) => handleChange("photo", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={userData.email} disabled />
      </div>

      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={userData.role}
          readOnly
          onChange={(e) => handleChange("role", e.target.value)}
        />
      </div>

      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;
