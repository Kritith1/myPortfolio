import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ name, link1, link2, link3 }) => {
  return (
    <React.Fragment>
      <header className="home sticky-top">
        <nav>
          <h1>{name}</h1>
          <div>
            <Link to="/">{link1}</Link>
            <Link to="/contact">{link2}</Link>
            <Link to="/project">{link3}</Link>

            {/* <a href=' '><i className="fal fa-lightbulb-slash dark" style={{color: "black", cursor: "pointer"}}></i></a>  */}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

Navbar.defaultProps = {
  name: "PORTFOLIO",
  link1: "Service",
  link2: "Contact",
  link3: "Project",
};

export default Navbar;
