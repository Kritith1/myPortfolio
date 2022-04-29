import { NavLink } from 'react-router-dom';
  
function Footer({name,title,title1,phone,email})
{    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-muted footer-title">{name}</p>
                        <p className="text-muted">
                        Have a nice day ;)
            </p>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">{title}</p>
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
                    <p className="text-muted footer-title">{title1}</p>

                    <a href="tel:+977 9840556623" className="text-muted">{phone}</a><br></br>
                    <a href="mailto:thapakt612@gmail.com" className="text-muted">{email}</a>

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
Footer.defaultProps ={
    name:"Kriti Thapa",
    title:"Important Pages",
    title1:"Contact Information",
    phone:"Phone: +977 9840556623",
    email:"Mail: thapakt612@gmail.com"

};
export default Footer