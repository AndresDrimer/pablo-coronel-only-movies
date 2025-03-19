import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();
const [mailSendedMessage, setMailSendedMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('service_2khlm57', 'template_l5wfka7', form.current, process.env.EMAILSJS_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        setMailSendedMessage("Your message has been sended OK")
    }, (error) => {
        console.log(error.text);
        setMailSendedMessage("Sorry, your message hasn´t been sended correctly. Please consider writing directly to pabloignaciocoronel@gmail.com")
    });
    };
  


  function handleChange(event) {
   setFormData(prev => {
    return {
        ...prev,
        [event.target.name]: event.target.value
    }
   })
    
  }
  
  
  
  return (
    <div className="--contact-total-container" id="contact">
      <h1 className="--contact-title">CONTACT</h1>
      <div className="--contact-message-after-sending">{mailSendedMessage}</div>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button className="--contact-btn-send">Send</button>
        
      </form>
    </div>
  );
}


