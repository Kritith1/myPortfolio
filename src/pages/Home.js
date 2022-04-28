import React from 'react';
import Services from '../components/Services';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Button from '../components/Button';

function Home()
{
    return (
      <section className="home">
        <div className="container">
           <Header />
           <Services />
           <About />
           <Projects />
           <div className="contact-circle">
              <p className="text-muted footer-title">Contact me!</p>
              <p className="text-muted">Hello you can contact me from the contact form below.
              I will get your message in the mail and get back to you.</p>
              <br></br>
              <Button to="/contact/" text="Contact" class="btn" />
           </div>
        </div>
      </section>
    );
}
export default Home