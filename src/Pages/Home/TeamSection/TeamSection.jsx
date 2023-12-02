const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Head Coach",
      description:
        "With over a decade of experience, John is dedicated to helping you achieve your fitness goals. His holistic approach to coaching combines expertise in strength training, nutrition, and motivation.",
      imageSrc:
        "https://i.ibb.co/6s90fgD/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Fitness Trainer",
      description:
        "Jane is passionate about guiding individuals towards a healthier lifestyle. Her dynamic fitness routines and personalized training plans ensure that each session is challenging and enjoyable.",
      imageSrc:
        "https://i.ibb.co/LJyNSCJ/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      position: "Yoga Instructor",
      description:
        "Discover the transformative power of yoga with Bob. As a certified yoga instructor, Bob brings a blend of mindfulness and physical wellness to his classes, helping you find balance and peace.",
      imageSrc:
        "https://i.ibb.co/jb2rJSv/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },
  ];

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
              <p className="text-gray-600">{teamMember.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
