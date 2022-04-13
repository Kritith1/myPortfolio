import React from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
      <React.Fragment>
      <header className="home sticky-top">
       
       <nav>
             <h1>Kriti</h1> 
               <div>
                 <Link to='/'>Service</Link>
                 <Link to='/contact'>Contact</Link>
                 <Link to='/project'>Project</Link>
                   {/* <a href="#">Service</a> */}
                  {/* <a href="#">About</a> */}
                  {/* <a href="/contact">Contact</a>  */}
                  {/* <a href=' '><i className="fal fa-lightbulb-slash dark" style={{color: "black", cursor: "pointer"}}></i></a>  */}
               </div>
       </nav>
   </header>
   </React.Fragment>
      
    
    
  )
}

export default Navbar