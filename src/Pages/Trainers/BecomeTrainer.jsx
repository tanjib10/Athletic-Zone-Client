import { useContext, useState } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BecomeTrainer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [skills, setSkills] = useState([]);
  const [availableTimeWeek, setAvailableTimeWeek] = useState("");
  const [availableTimeDay, setAvailableTimeDay] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setSkills((prevSkills) =>
      prevSkills.includes(value)
        ? prevSkills.filter((skill) => skill !== value)
        : [...prevSkills, value]
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/new/trainers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email: user.email,
          age,
          profileImage,
          skills,
          availableTimeWeek,
          availableTimeDay,
          otherInfo,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Trainer information submitted successfully!",
        });
        navigate("/");
        console.log("Trainer information submitted successfully!");
      } else {
        console.error("Error submitting trainer information");
      }
    } catch (error) {
      console.error("Error submitting trainer information:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h3 className="py-12 text-3xl font-bold text-center">
        Please fill up this form
      </h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name:
        </label>
        <input
          type="text"
          className="w-full border rounded-md py-2 px-3"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age:
        </label>
        <input
          type="text"
          className="w-full border rounded-md py-2 px-3"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Profile Image URL:
        </label>
        <input
          type="text"
          className="w-full border rounded-md py-2 px-3"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Skills:
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Skill1"
              checked={skills.includes("Skill1")}
              onChange={handleSkillsChange}
            />
            <span className="ml-2">Yoga</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Skill2"
              checked={skills.includes("Skill2")}
              onChange={handleSkillsChange}
            />
            <span className="ml-2">Weight lifting</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Skill3"
              checked={skills.includes("Skill3")}
              onChange={handleSkillsChange}
            />
            <span className="ml-2">Meditation</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Skill4"
              checked={skills.includes("Skill4")}
              onChange={handleSkillsChange}
            />
            <span className="ml-2">Fitness</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Available Time in a Week:
        </label>
        <input
          type="text"
          className="w-full border rounded-md py-2 px-3"
          value={availableTimeWeek}
          onChange={(e) => setAvailableTimeWeek(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Available Time in a Day:
        </label>
        <input
          type="text"
          className="w-full border rounded-md py-2 px-3"
          value={availableTimeDay}
          onChange={(e) => setAvailableTimeDay(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Other Info:
        </label>
        <textarea
          className="w-full border rounded-md py-2 px-3"
          value={otherInfo}
          onChange={(e) => setOtherInfo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="btn bg-zinc-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default BecomeTrainer;
