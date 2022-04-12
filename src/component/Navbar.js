import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
      <React.Fragment>
      <header className="home sticky-top">
       
       <nav>
             <h1>Kriti</h1> 
               <div>
                  <a href="#">Service</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a> 
                  <a><i className="fal fa-lightbulb-slash dark" style={{color: "black", cursor: "pointer"}}></i></a>
               </div>
       </nav>
   </header>
   </React.Fragment>
      
    
    
  )
}

export default Navbar