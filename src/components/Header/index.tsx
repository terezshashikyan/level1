import { Logo, us, Hamburger } from "../../assets/icons";
import Sidebar from "../Sidebar";
import ArrowButton from "../ArrowButton";

import "./style.scss";

const Header = () => (
  <header>
    <div className="container header">
      <img className="header__logo" src={Logo} alt="logo" />
      <div className="header__items">
        <div className="header__items_item header__items_home">
          <a className="header__items_item_link" href="/">
            Home
          </a>
        </div>
        <div className="header__items_item header__items_auctions active">
          <a className="header__items_item_link" href="/auctions">
            Auctions
          </a>
          <ArrowButton />
        </div>

        <div className="header__items_item header__items_user">
          <a className="header__items_item_link" href="/auctions">
            Adrine
          </a>
          <ArrowButton />
        </div>

        <div className="header__items_item header__items_language">
          <img src={us} alt="" />
          <a className="header__items_item_link" href="#language">
            Eng
          </a>
          <ArrowButton />
        </div>
        <div className="header__items_time header__items_item">
          <a className="header__items_item_link" href="#time">
            11:08 PM
          </a>
          <ArrowButton />
        </div>
      </div>
    </div>
    <div className="header__sidebar">
      <Sidebar/>
      </div>
  </header>
);

export default Header;
