import React from 'react';
import Logo from '../data/img/mefirst.jpg';
import Button from '../components/Button';
function About(title,title2,about)
{
    return (
        <section className="aboutpage"> 
          <div className="container">
          <div className="about">
        <div className="row">
          <div className="col-md-6">
          <p className="text-muted text-sub-title">Let's explain myself</p>

            <h2 className="sub-title text-muted hakkimda">ABOUT</h2>
            <p className="text-muted aciklama">
            Hello i'm Kriti and welcome to my portfolio website. 
            </p><br></br>
            <p className="text-muted aciklama">
            I am a Bsc.Csit 8th sem student.I am a person who has high passion in software development.One of my dream is to master all the steps of software development
            and now,I am working toward it. 

            </p>
            <p className="text-muted aciklama">
            I have always loved computer programming since school days.As i grew up i am very lucky to be learning about programming.I spend most of my time in researching and learning proramming languages.
            I am good in carrying out the work given to me effectively.
            Thank you for reading. Have a nice day ;) 

            </p>
            <br></br>
            <div className="about-buttons">
            <a rel="noreferrer" target="_blank" href="https://github.com/Kritith1"  class="btn mr-1" > <i class="fab fa-github"></i> Github</a>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kriti22.thapa"  class="btn mr-1" > <i class="fab fa-facebook"></i> Facebook</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kriti-thapa-3397a316a/"  class="btn mr-1" > <i class="fab fa-linkedin"></i> Linkedin</a>

            </div>

          </div>
          <div className="col-md-6 logo-col">
            <img className="img-fluid"  alt={"hi"}src={Logo}></img>
          </div>
        </div>
      </div>
          </div>
        </section>
    );
}

export default About