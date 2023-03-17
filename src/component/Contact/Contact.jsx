import React from 'react'
import "./Contact.css";
import Icon from '../../assest/contact-icon.svg';
import {BsWhatsapp} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import {MdOutlineEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact'>
      <h1 className='contact_header'>Get in touch</h1>
      <div className="contact_main">
        <div>
          <img src={Icon} alt='404' className='contact-image'/>
        </div>
        <div className="options">
          <div className="option whatsapp">
            <BsWhatsapp className="contact-icon" style={{color:'green'}}/>
            <h4>WhatsApp</h4>
            <h5>+91 8766921190</h5>
            <a href="https://api.whatsapp.com/send?phone=8766921190" target="_blank" rel='noreferrer'>Send a message</a>
          </div>
          <div className="option call">
            <FiPhoneCall className='contact-icon' style={{color:'blue'}}/>
            <h4>Call</h4>
            <h5>+91 8766921190</h5>
            <a href="tel: +91 8766921190">Make a Call</a>
          </div>
          <div className="option email">
            <MdOutlineEmail className='contact-icon' style={{color:'red'}}/>
            <h4>Email</h4>
            <h5>Anjenayawealth@gmail.com</h5>
            <a href="mailto:Anjenayawealth@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
