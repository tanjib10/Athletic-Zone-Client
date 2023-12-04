import { Link } from "react-router-dom";

const FeaturedClassesSection = () => {
  const featuredClasses = [
    {
      id: 1,
      title: "Cardio Blast",
      description:
        "High-intensity cardio to boost your heart rate and burn calories.",
    },
    {
      id: 2,
      title: "Strength Fusion",
      description:
        "Combine strength training and functional movements for a powerful workout.",
    },
    {
      id: 3,
      title: "Yoga Harmony",
      description:
        "Find balance and flexibility through calming yoga sessions.",
    },
    {
      id: 4,
      title: "HIIT Ignition",
      description:
        "Ignite your metabolism with intense HIIT sessions for maximum calorie burn.",
    },
    {
      id: 5,
      title: "Mindful Meditation",
      description:
        "Calm your mind and reduce stress with guided meditation practices.",
    },
    {
      id: 6,
      title: "Sculpt & Tone",
      description:
        "Define and sculpt your body with targeted exercises for muscle toning.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#f5f5f5] to-[#ffffff]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Featured Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClasses.map((featuredClass) => (
            <div
              key={featuredClass.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#161A30]">
                {featuredClass.title}
              </h3>
              <p className="text-gray-700 mb-6">{featuredClass.description}</p>
              <Link
                to="/classes"
                className="text-blue-500 hover:underline transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClassesSection;
