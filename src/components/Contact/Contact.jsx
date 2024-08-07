import React, { useState } from 'react'
import './Contact.css'

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f1e465a-6898-4169-b57c-92103a1e3ade");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-con">
      
        <div className="contact-box">
        <div className="contact-details-left">
        <h1 className='contact-heading'>Contact Us</h1> 
          <p>Feel free to get in touch with us through any of the following means. Whether you have inquiries, collaboration opportunities, or just want to say hello, we're here to listen</p>
        <h2>Get In Touch</h2>
        <p>1234567890</p>
        <p>contact@gmail.com</p>
        </div>
        <div className="contact-details">
          <form onSubmit={onSubmit} className="contact-details-right">
          <div className="input">
          <input type="text" name='name' placeholder='Full Name' />
          
          <input type="tel" name='phone' placeholder='Phone Number' />
          
          <input type="text" name='service' placeholder='Service' />
          </div>
          <div className="desc">
          <textarea name='message' className='description' type="text" placeholder='Describe Your Project...' />
          <button type='submit'>Enter</button> <span>{result}</span>
          </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
