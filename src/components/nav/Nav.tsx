import { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineProfile } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

const navMenu = [
  { link: "#", icon: <AiOutlineHome /> },
  { link: "#about", icon: <AiOutlineUser /> },
  { link: "#experience", icon: <BiBook /> },
  { link: "#portfolio", icon: <AiOutlineProfile /> },
  { link: "#contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState(navMenu[0].link);

  return (
    <nav>
      {navMenu.map((item) => (
        <a
          href={item.link}
          className={activeNav === item.link ? "active" : ""}
          onClick={() => setActiveNav(item.link)}
          key={item.link}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
