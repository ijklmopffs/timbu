import logo from "../assets/jtlogo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/">Brand</Link>
          <Link to="/">Inspiration</Link>
          <Link to="/">Categories</Link>
          <Link to="/">Sales</Link>
        </div>
      </div>
      <div>
        <input
          type="text"
          className="border-2 rounded-md w-40 p-2"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
}
