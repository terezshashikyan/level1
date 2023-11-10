import { FC } from "react";
import { SoldOut } from "../../../assets/icons";
import { ICarItemComponent } from "./types";

import "./style.scss";

const CarItem: FC<ICarItemComponent> = ({ car }) => (
  <div className="carItem">
    <div className="carItem__img">
      <img src={car.src} alt="car" />
      {car.soldOut ? (
        <img className="carItem__soldout" src={SoldOut} alt="sold out" />
      ) : null}
      {car.soldOut ? (
        <span className="carItem__priceTag">{car.price}</span>
      ) : null}
    </div>
    <div className="carItem__content">
      <p className="carItem__content_name">{car.name}</p>
      <a className="carItem__content_viewDetailsLink" href="#details">
        View Item
      </a>
    </div>
  </div>
);

export default CarItem;
