import React from 'react'
import "../styles/Contact.css"

function Contact() {
  return (
    <div><div class="wrapper">
    
    <form class="form">
      <div class="pageTitle title">Contact Me! </div>
      <div class="secondaryTitle title">You can reach out to me by filling this form</div>
      <input type="text" class="name formEntry" placeholder="Name" required />
      <input type="text" class="email formEntry" placeholder="Email" required/>
      <textarea class="message formEntry" placeholder="Message"required></textarea>
      <button class="submit formEntry" onclick="thanks()">Submit</button>
    </form>
  </div></div>
  )
}

export default Contact
