
import './App.css';
import Heropage from './component/Heropage';
import Navbar from './component/Navbar';
import React from 'react'
import Project from './component/Project';
import Contact from './component/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
    
    <BrowserRouter>
    <Navbar />
          <Routes>
         
              <Route path='/' element={<Heropage></Heropage>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/project' element={<Project></Project>}></Route>
          </Routes>
          </BrowserRouter>
    </React.Fragment>

    
  );
}

export default App;
