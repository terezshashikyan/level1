import { CARS } from "./constants";

import CarItem from "../CarItem";

import "./style.scss";

const Cars = () => {
  const carsRenderer = CARS.filter((car) => !car.soldOut).map((car) => (
    <CarItem car={car} key={car.id}/>
  ));

  return (
    <section className="container cars">
      <h3 className="cars__heading">Popular Cars</h3>
      <div className="cars__container">{carsRenderer}</div>
    </section>
  );
};

export default Cars;
