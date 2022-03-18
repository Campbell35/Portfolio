import React, {useRef} from 'react'
import './contact.css'
import { MdMail } from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e5ppz4k', 'template_mw4n88j', form.current, '8RyXYqL3V4mP9Odb0')

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>campbell.mason@hotmail.co.nz</h5>
            <a href='mailto:campbell.mason@hotmail.co.nz'>Send a message</a>
          </article>
           <article className='contact_option'>
            <AiFillPhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>021 156 0115</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact