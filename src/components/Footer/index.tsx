import { Facebook, Instagram, Linkedin } from "../../assets/icons";

import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footerNavbar container">
        <div className="footerNavbar__links">
          <div className="footerNavbar__socialMediaLinks">
            <a className="footerNavbar__SocialMediaLink" href="#Instagram">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a className="footerNavbar__SocialMediaLink" href="#Facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a className="footerNavbar__SocialMediaLink" href="#Linkedin">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
          <span className="footerNavbar__termsLink">Terms and Conditions</span>
        </div>

        <div className="footerNavbar__content">
          <span className="footerNavbar__content1">@Global Shipping</span>
          <span className="footerNavbar__content2">Powered By ShellLogix</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
