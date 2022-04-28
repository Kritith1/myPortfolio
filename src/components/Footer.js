import { NavLink } from 'react-router-dom';
  
function Footer()
{    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-muted footer-title">Kriti Thapa</p>
                        <p className="text-muted">
                        Have a nice day ;)
            </p>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Important Pages</p>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Contact Information</p>

                    <a href="tel:+977 9840556623" className="text-muted">Phone: +977 9840556623</a><br></br>
                    <a href="mailto:thapakt612@gmail.com" className="text-muted">Mail: thapakt612@gmail.com</a>

                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Social Media</p>

                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kriti-thapa-3397a316a/" className="text-muted">Linkedin</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/kriti22.thapa" className="text-muted">Facebook</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://github.com/Kritith1" className="text-muted">Github</a><br></br>

                    </div>
                </div>
            </div>

        </footer>
    );
}
export default Footer