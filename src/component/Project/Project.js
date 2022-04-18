import React, { useState, useEffect } from "react";
import "../Project/Project.css";
import axios from "axios";
import ProjectType from "./ProjectType";

function Project() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Kritith1/repos?per_page=3")
      .then((res) => setProject(res.data));
  }, []);
  return (
    <div className="service">
      <div className="projects">
        <h3>
          <ProjectType />
        </h3>
      </div>

      <div className="box">
        {project.map((myproject) => {
          return (
            <div className="card">
              <i className="far fa-user"></i>
              <h4>{myproject.name}</h4>
              <div className="pra">
                <p>(date={new Date(myproject.pushed_at).toDateString})</p>

                <p>
                  <a className="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
