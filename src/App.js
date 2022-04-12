
import './App.css';
import Heropage from './component/Heropage';
import Navbar from './component/Navbar';
import React from 'react'
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Heropage />
    <Project />
    <Contact />
    </React.Fragment>

    
  );
}

export default App;
