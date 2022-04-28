import React, { useState, useEffect } from "react";
import "../Project/Project.css";
import axios from "axios";
import ProjectType from "./ProjectType";

function Project() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/project/3").then((res) => {
      console.log("hello");

      setProject(res.data);
      console.log(res.data);
    });
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
              <h4>{myproject.projectTitle}</h4>
              <div className="pra">
                <p>{new Date(myproject.projectDate).toDateString()}</p>

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
