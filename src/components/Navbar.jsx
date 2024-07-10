import { Link } from "react-router-dom";
import logo from "../assets/jtlogo.svg";
import hamburger from "../assets/hamburger.svg";
import iconDown from "../assets/chevron-down.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar({ onButtonClick, onLinkClick }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !nav);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            onClick={onButtonClick}
            className="flex items-center gap-2"
          >
            Brand
            <img src={iconDown} alt="" />
          </Link>
          <Link to="/" className="text-[#AC702F]">
            Inspiration
          </Link>
          <Link
            to="/"
            onClick={onLinkClick}
            className="flex items-center gap-2"
          >
            Categories
            <img src={iconDown} alt="" />
          </Link>
          <Link to="/">Sales</Link>
        </div>
      </div>
      <div className="hidden md:block">
        <input
          type="text"
          className="border-2 rounded-md w-40 p-2"
          placeholder="Search..."
        />
      </div>
      <div className="md:hidden">
        <button onClick={handleNav}>
          <img src={hamburger} alt="" />
        </button>
        {nav && <MobileNav onClose={handleNav} />}
      </div>
    </nav>
  );
}
