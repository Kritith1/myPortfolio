import Logo from '../data/img/me.jpg';
import Button from '../components/Button';
function Header({name,desc})
{
    return (
        <header className="header">
        <div className="row">
          <div className="col-md-6">
            <p className="white title">
              Hi, this is 
            </p>
            <h1 className="purple name">{name}</h1>
            <p className="text-muted">
            {desc}

            </p>
            <br></br>

            <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1CsNldCVMjAIGRaJtINHE42hVNaYPtSdJ/view" className="btn">View CV</a>
          </div>
          <br></br>
          <br></br>

          <div className="col-md-6 logo-col">
            <img className="img-fluid logo" alt="hello" src={Logo}></img>
          </div>
        </div>
      </header>

    )
}
Header.defaultProps ={
  name:"Kriti",
  desc:"I am Bsc.Csit 8th sem student.I like to code beautiful websites.I am currently learning react and node js."

};
export default Header