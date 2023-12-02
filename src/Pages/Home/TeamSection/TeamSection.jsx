import { useEffect, useState } from "react";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <section className="py-16 my-16 bg-gradient-to-r from-[#f5f5f5] to-[#ffffff]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((teamMember) => (
            <div
              key={teamMember.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative mb-4">
                <img
                  src={teamMember.imageSrc}
                  alt={teamMember.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-[#161A30] opacity-60 hover:opacity-0 transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-[#161A30]">
                {teamMember.name}
              </h3>
              <p className="text-gray-700 mb-4">{teamMember.position}</p>
              <p className="text-[#31304D]">{teamMember.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
