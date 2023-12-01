import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import AboutUsSection from "../AboutUsSection/AboutUsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Athletic Zone | Home</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
      <AboutUsSection></AboutUsSection>
    </div>
  );
};

export default Home;
