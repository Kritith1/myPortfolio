import Card2 from "./Card2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import one from "../data/img/project.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.less'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css";

function Projects()
{
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://stark-ravine-15475.herokuapp.com/project/3")
      .then((res) => setProject(res.data));
  }, []);

    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">These are some projects made by me</p>
        <h2 className="sub-title text-muted">PROJECTS</h2>
        <br></br>
        <div className="row">
        <Swiper pagination={{
  "clickable": true
}} slidesPerView={2}  navigation={true} spaceBetween={20} >
                  {project.map((myproject) => (
                           <SwiperSlide className="mySwiper"> <Card2 
       
                           imageUrl={one}
              
                              cardTitle={myproject.projectTitle}
              cardText={new Date(myproject.projectDate).toDateString()}
              gitUrl={myproject.projectLink}
                            /></SwiperSlide>
               )
            )}

      ...
    </Swiper>

            
        </div>
     </div>
    )
}
export default Projects