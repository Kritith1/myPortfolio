import React from "react";
import Heropage from "../component/Heropage/Heropage";
import Project from "../component/Project/Project";
import Contact from "../component/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Heropage></Heropage>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default Routing;
