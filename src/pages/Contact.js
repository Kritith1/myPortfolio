import React, {useState,useEffect}from 'react';
import { ToastContainer,toast }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

toast.configure();
function Contact()
{
  
  const notify = () => toast("Message sent success!");
  const initialValues = { name: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const[formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const checkValidate = () => {
    setFormErrors(validate(formValues));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValid(false);
    console.log("hello");
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("https://stark-ravine-15475.herokuapp.com/user/", {
          name: formValues.name,
          email: formValues.email,
          message: formValues.textarea,
        })
        .then((res) => {
          toast("messsage sent success");
        setFormValues(initialValues);
      })
        .catch((err)=>toast.error("Failed to submit!"));
       
      }
      e.preventDefault();
      return false;
      };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameregex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
    if (!values.name) {
      errors.name = "Fullname is required";
    }
    else if (!nameregex.test(values.name)) {
      errors.name = "This is not a valid name";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }

    return errors;
  };
  
    return (
        <section className="contact"> 
           <div className="container">
           <div className="contact-circle">
           
              <p className="text-muted footer-title">Contact me!</p>
              <br></br>
              
              <form  className="form" method="POST" onSubmit={handleSubmit}>
              <p className="text-muted">Email</p>
              <input className="input" placeholder="Email" name="email"onChange={(e) => handleChange(e, "email")} onBlur={checkValidate} value={formValues.email}></input>
              <p style={{color: "red"}}>{formErrors.email}</p>
              <br></br>
              <br></br>
              <p className="text-muted">Name</p>
              <input className="input" placeholder="Name"  name="name" onChange={(e) => handleChange(e, "name")} onBlur={checkValidate} value={formValues.name}></input>
              <span style={{color: "red"}}> {formErrors.name}</span>
              <br></br>
              <br></br>
              <p className="text-muted">Message</p>
              <textarea className="input" placeholder="Message"  name="textarea" onChange={(e) => handleChange(e, "textarea")} onBlur={checkValidate} value={formValues.textarea}></textarea>
              <p style={{color: "red"}}> {formErrors.textarea}</p>
              <br></br>
              <br></br>
              
              <input
              
              type="submit"
              onClick={handleSubmit}
              
              value="Send"
              class="btn"
            />
            
            <ToastContainer />
              </form>
           </div>
            </div>
        </section>
    );
}
export default Contact