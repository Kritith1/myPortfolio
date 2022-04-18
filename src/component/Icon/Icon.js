import React from "react";
import "../Icon/Icon.css";

function Icon() {
  return (
    <div id="icon">
      <a href="#" target="_blank">
        {" "}
        <div className="Icon1">
          <i className="fab fa-instagram"></i>
        </div>
      </a>
      <a href="#" target="_blank">
        {" "}
        <div className="Icon2">
          <i className="fab fa-facebook-f"></i>
        </div>
      </a>
      <a href="#" target="_blank">
        <div className="Icon3">
          <i className="fab fa-linkedin-in"></i>
        </div>
      </a>
    </div>
  );
}

export default Icon;
