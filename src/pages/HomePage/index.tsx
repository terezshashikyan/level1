import Cars from "./Cars";
import Auctions from "./Auctions";
import SoldoutCars from "./SoldoutCars";
import HomePageSlider from "./HomePageSlider";

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
