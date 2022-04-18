import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import React from "react";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        {/* <Routes>
          <Route path="/" element={<Heropage></Heropage>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
        </Routes> */}
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
