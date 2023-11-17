import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebarContext";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();  
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`navbar bg-orangered flex align-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <Link to="/" className="navbar-brand flex">
{/*               <img src={logo} alt="not found" className="logo"/>
 */}              <p>E-recipes</p>
            </Link>
            <div className="navbar-btns flex align-center">
              <button
                type="button"
                className="navbar-show-btn text-white"
                onClick={() => openSidebar()}
              >
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
