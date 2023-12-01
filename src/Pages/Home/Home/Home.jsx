import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Athletic Zone | Home</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
    </div>
  );
};

export default Home;
