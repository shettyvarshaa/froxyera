import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app_logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <a href="/about">About</a>
        </li>
        <li className="p__opensans">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="p__opensans">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#E0EAF7"
          className="overlay__open"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-right">
            <IoMdClose
              fontSize={35}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="/">Home</a>
              </li>
              <li className="p__opensans">
                <a href="/about">About</a>
              </li>
              <li className="p__opensans">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="p__opensans">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
