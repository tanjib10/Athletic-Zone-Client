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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Featured Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClasses.map((featuredClass) => (
            <div
              key={featuredClass.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">
                {featuredClass.title}
              </h3>
              <p className="text-gray-700">{featuredClass.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClassesSection;
