import React from 'react';
import Services from '../components/Services';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Button from '../components/Button';

function Home({title,desc})
{
    return (
      <section className="home">
        <div className="container">
           <Header />
           <Services />
           <About />
           <Projects />
           <div className="contact-circle">
              <p className="text-muted footer-title">{title}</p>
              <p className="text-muted">{desc}</p>
              <br></br>
              <Button to="/contact/" text="Contact" class="btn" />
           </div>
        </div>
      </section>
    );
}
Home.defaultProps = {
  title:"Contact me!",
  desc:"Hello you can contact me from the contact form below.I will get your message in the mail and get back to you."
}
export default Home