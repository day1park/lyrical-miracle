import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-info mb-5">
      <Link to="/" className="navbar-brand m-1 h1 ">
        <i className="fas fa-music" />
      </Link>
      <span className="navbar-brand mb-0 h1 mx-auto">
        叙情的な奇跡 | Lyrical Miracle
      </span>
    </nav>
  );
};

export default Navbar;
