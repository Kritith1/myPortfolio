import React, { useState, useEffect } from "react";
import Card2 from "../components/Card2";
import map from "../data/img/project.jpg"
import axios from "axios";
function Projects() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/project/6")
      .then((res) => setProject(res.data));
  }, []);

  return (
    <section className="services servicespage">
      <div className="container">
        <p className="text-muted text-sub-title text-center">
          These are some projects made by me
        </p>
        <h2 className="sub-title text-muted">PROJECTS</h2>
        <br></br>

        <div className="row">
          {
          project.map((myproject) => {
            return (
              <Card2
            imageUrl={map}
              
              cardTitle={myproject.projectTitle}
              cardText={new Date(myproject.projectDate).toDateString()}
              gitUrl={myproject.projectLink}
              />
            );
          })}
          ...
        </div>
      </div>
    </section>
  );
};
export default Projects;
