import { useState } from "react";
import ArrowButton from "../ArrowButton";
import {Hamburger } from "../../assets/icons";

import "./style.scss";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
      <div className="sidebar">
        <img className="sidebar__img" src={Hamburger} alt="menu" onClick = {()=> toggleIsOpen()} />
        {isOpen? <section className="sidebar__items">
        <div className="sidebar__item sidebar__home">
          <a className="sidebar__item_link" href="/">
            Home
          </a>
        </div>
        <div className="sidebar__item sidebar__auctions active">
          <a className="sidebar__item_link" href="/auctions">
            Auctions
          </a>
          <ArrowButton />
        </div>

        <div className="sidebar__item sidebar__user">
          <a className="sidebar__item_link" href="/auctions">
            Adrine
          </a>
          <ArrowButton />
        </div>

        <div className="sidebar__item sidebar__language">
          <a className="sidebar__item_link" href="#language">
            Eng
          </a>
          <ArrowButton />
        </div>
        <div className="sidebar__time sidebar__item">
          <a className="sidebar__item_link" href="#time">
            11:08 PM
          </a>
          <ArrowButton />
        </div>
        </section>:null}
      </div>
)};

export default Sidebar;