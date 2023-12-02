import { Link } from "react-router-dom";

const LatestArticlesSection = () => {
  const latestArticles = [
    {
      id: 1,
      title: "The Importance of Cardiovascular Exercise",
      excerpt:
        "Discover why cardiovascular exercise is crucial for overall health and fitness. Learn about the benefits and different types of cardio workouts.",
    },
    {
      id: 2,
      title: "Nutrition Tips for a Healthy Lifestyle",
      excerpt:
        "Explore essential nutrition tips to support your fitness journey. Learn about balanced diets, hydration, and the role of nutrients in your overall well-being.",
    },
    {
      id: 3,
      title: "Effective Strength Training Techniques",
      excerpt:
        "Unlock the secrets of effective strength training. Find out about proper techniques, workout routines, and how to achieve optimal results in building strength.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#F0ECE5] to-[#ffffff]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#161A30]">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-[#F0ECE5]  duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl  font-semibold mb-4">{article.title}</h3>
              <p className="text-[#31304D] mb-6">{article.excerpt}...</p>
              <Link to="/">
                <span className="text-blue-400 underline cursor-pointer">
                  Read more
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
