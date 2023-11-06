import { CARS } from "../Cars/constants";

import CarItem from "../CarItem";

import "./style.scss";

const SoldoutCars = () => {
  const soldoutCarsRenderer = CARS.filter((car) => car.soldOut).map((car) => (
    <CarItem car={car} />
  ));

  return (
    <section className="container soldoutCars">
      <h3 className="soldoutCars__heading">Sold Out</h3>
      <div className="soldoutCars__container">{soldoutCarsRenderer}</div>
    </section>
  );
};

export default SoldoutCars;
