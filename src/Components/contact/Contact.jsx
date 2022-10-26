import React from 'react'
import './COntact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03wuzwp', 'template_0zq1g7j', form.current, 'Vm_RQ0Hrah6SwWCVm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5 className='contactashu'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ashuydv0505@gmail.com</h5>
            <a href='mailto:ashuydv0505@gmail.com'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>ashu.macin.tosh</h5>
            <a href='https://www.instagram.com/ashu.macin.tosh/'>Send a Direct Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8948*****7</h5>
            <a href='https://api.whatsapp.com/send?phone+918948651647'>Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name'required/>
            <input type='email'name='email'placeholder='Your Email' required/>
            <textarea name='message'rows='7'placeholder='Your Message'required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact