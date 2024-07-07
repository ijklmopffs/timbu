import { Link } from "react-router-dom";
import logo from "../assets/jtlogo.svg";
import hamburger from "../assets/hamburger.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/">Brand</Link>
          <Link to="/">Inspiration</Link>
          <Link to="/">Categories</Link>
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
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
}
