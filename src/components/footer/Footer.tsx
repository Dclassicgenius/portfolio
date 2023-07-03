import "./footer.css";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        DRIM
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="">
          <IoLogoTwitter />
        </a>
        <a href="">
          <FiInstagram />
        </a>
        <a href="">
          <BiLogoTelegram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Patrick Amaechi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
