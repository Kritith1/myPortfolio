import React from 'react'
import "../styles/Heropage.css"
import "../static/img/photo.png"
import Type from './Type'


function Heropage() {
  return (
    <React.Fragment>

<main>
    <div className="primary"></div>
       <div className="right-circle"></div>
       
       <div className="content">
         
           <h2>Kriti Thapa</h2>
          
               <p><Type /></p>
           <button><a href="#">Download CV</a></button>
            </div>
            <div id="icon">
          <a href="#" target="_blank"> <div className="Icon1"><i className="fab fa-instagram"></i></div></a>
          <a href="#" target="_blank"> <div className="Icon2"><i className="fab fa-facebook-f"></i></div></a>
          <a href="#"target="_blank" ><div className="Icon3"><i className="fab fa-linkedin-in"></i></div></a>

       </div>
     
   </main>
    </React.Fragment>
  )
}

export default Heropage