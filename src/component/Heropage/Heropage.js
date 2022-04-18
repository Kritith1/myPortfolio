import React from "react";
import Icon from "../Icon/Icon";
import "../Heropage/Heropage.css";
import "../../static/img/photo.png";
import Type from "./Type";

function Heropage({ name }) {
  return (
    <React.Fragment>
      <main>
        <div className="primary"></div>
        <div className="right-circle"></div>

        <div className="content">
          <h2>{name}</h2>

          <p>
            <Type />
          </p>
          <button>
            <a href="#">Download CV</a>
          </button>
        </div>
        <Icon />
      </main>
    </React.Fragment>
  );
}

Heropage.defaultProps = {
  name: "Kriti Thapa",
};

export default Heropage;
