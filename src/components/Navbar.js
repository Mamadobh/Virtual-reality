import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/logo.svg";
import { links } from "../data";
import { TbMenu2 } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import CercleImage from ".././images/circle.png";
import useIntersectionObserverSc from "./hooks/useIntersectionObserverSc";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const targetref = useRef(null);
  const isVisible = useIntersectionObserverSc(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetref
  );
  const [shouldAnimate, setShouldAnimate] = useState(false);
  console.log("it render")

  useEffect(() => {
    if (isVisible) {
      setShouldAnimate(true);
    }
  }, [isVisible]);
  return (
    <nav ref={targetref} className={`header ${shouldAnimate? 'scroll_to_bottom ' :''} `}>
      <div className="container navbar_container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <img src={CercleImage} className="cercle_image" alt="cercle_image" />
        <TbMenu2
          className="open_icn icn "
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
        />

        <ul
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
          className={`nav_menu ${isOpen ? "show_menu" : ""}`}>
          <li>
            <IoIosClose className="close_icn icn" />
          </li>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active_nav" : "")}>
                  {name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <button className="btn">Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
