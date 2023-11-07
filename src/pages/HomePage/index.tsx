import HomePageSlider from "./HomePageSlider";
import SoldoutCars from "./SoldoutCars";
import Auctions from "./Auctions";
import Cars from "./Cars";

import "./style.scss";

const Home = () => (
  <section className="homePage">
    <HomePageSlider />
    <Auctions />
    <Cars />
    <SoldoutCars />
  </section>
);

export default Home;
