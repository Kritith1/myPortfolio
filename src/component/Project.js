import React ,{useState,useEffect} from 'react'
import "../styles/Project.css"
import axios from 'axios'
import ProjectType from './ProjectType'



function Project() {
    const[project,setProject]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users/Kritith1/repos?per_page=3")
        .then(res=>setProject(res.data))
    },[])
  return (
    

<div className="service">
    <div className="projects">
         <h3><ProjectType /></h3>
    </div>

    <div className="box">
        {
            project.map(myproject=>{
                return(<div className="card">
            
                <i className="far fa-user"></i>
                <h4>{myproject.name}</h4>
                <div className="pra">
                    <p>{myproject.pushed_at}</p>
    
                    <p >
                        <a className="button" href="#">Read More</a>
                    </p>
                </div>
            </div>

                )
            })
        }
        {/* /* <div className="card">
            
            <i className="far fa-user"></i>
            <h4>Portfolio Website</h4>
            <div className="pra">
                <p>This is a simple website to view a persons information from their portfolio.</p>

                <p >
                    <a className="button" href="#">Read More</a>
                </p>
            </div>
        </div>

        <div className="card">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Optimal Path Finding</h4>
            <div className="pra">
                <p>This is a simple website to find the shortest path for any user in kathmandu to reach their destination on time.</p>

                <p >
                    <a className="button" href="#">Read More</a>
                </p>
            </div>
        </div>

        <div className="card">
            <i className="fas fa-keyboard"></i>
            <h4>Simple Golang Website</h4>
            <div className="pra">
                <p>This is a simple website to learn the basic of golang and is a simple website.It just takes a simple input.</p>

                <p >
                    <a className="button" href="#">Read More</a>
                </p>
            </div>
        </div>
    </div> */}
</div>
</div>

    
  )
  
}

export default Project


