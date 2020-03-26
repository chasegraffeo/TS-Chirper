import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="nav p-2 shadow justify-content-end align-items-center">
      <NavLink className="btn btn-outline-warning mx-1" exact to="/">
        Home
      </NavLink>
      <NavLink className="btn btn-outline-warning mx-1" exact to="/compose">
        Post
      </NavLink>
    </nav>
  );
};

interface NavbarProps {}

export default Navbar;
