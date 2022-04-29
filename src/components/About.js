import Logo from '../data/img/mefirst.jpg';
import Button from '../components/Button';
function About({title,title2,about})
{
    return (

    <div className="about">
        <div className="row">
          <div className="col-md-6">
          <p className="text-muted text-sub-title">{title}</p>

            <h2 className="sub-title text-muted hakkimda">{title2}</h2>
            <p className="text-muted aciklama">
            {about}
            </p>
            <br></br>
            <div className="about-buttons">
            <Button to="/projects/" text="Works" class="btn mr-1" />
            <Button to="/about/" text="Read more..." class="btn-outline" />
            </div>

          </div>
          <div className="col-md-6 logo-col">
            <img className="img-fluid" alt="hello" src={Logo}></img>
          </div>
        </div>
      </div>

    )
}
About.defaultProps = {
  title:"Let's explain myself",
  title2:"ABOUT",
  about:" I am currently studying Bsc.Csit in 8th sem.I am studying in Asian School of Management and technology.I am a very hard working student and have gotten good grades in my studies"
};
export default About