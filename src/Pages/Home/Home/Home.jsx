import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import FeaturedClassesSection from "../FeaturedClassesSection/FeaturedClassesSection";
import LatestArticlesSection from "../LatestArticlesSection/LatestArticlesSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Athletic Zone | Home</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
      <AboutUsSection></AboutUsSection>
      <FeaturedClassesSection></FeaturedClassesSection>
      <TestimonialsSection></TestimonialsSection>
      <LatestArticlesSection></LatestArticlesSection>
    </div>
  );
};

export default Home;
