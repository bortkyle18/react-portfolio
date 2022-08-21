import "../../index.css"
import emailPic from "../../assets/images/email.png"
import phonePic from "../../assets/images/phone.png"
import React, { useState } from 'react';
import { validateEmail} from '../../utils/helpers';


const Contact = (props) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailErrorMessage && !nameErrorMessage && !messageErrorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setEmailErrorMessage('Your email is invalid.');
      } else {
        setEmailErrorMessage('');
      }
    } else if (e.target.name === 'name') {
      if (!e.target.value.length) {
        setNameErrorMessage(`Your name is required.`);
      } else {
        setNameErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setMessageErrorMessage(`A message is required.`);
      } else {
        setMessageErrorMessage('');
      }
    }
  }

  return (
    <>
      <h2 id="ContactHeader">Contact Me</h2>
      <section>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" id="formName">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email" id="formEmail">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message" id="formMessage">Message:</label>
            <textarea name="message" rows="7" defaultValue={message} onBlur={handleChange} />
          </div>
            {nameErrorMessage && (
              <div>
                <p className="error-text">{nameErrorMessage}</p>
              </div>
            )}
            {emailErrorMessage && (
              <div>
                <p className="error-text">{emailErrorMessage}</p>
              </div>
            )}
            {messageErrorMessage && (
              <div>
                <p className="error-text">{messageErrorMessage}</p>
              </div>
            )}
          <div>
            <button data-testid="button" type="submit">Submit</button>
          </div>
        </form>
      </section>
      <address className="contactMe">
        <div className="contact">
          <a href="tel:+15174883919" target="_blank" rel="noreferrer" id="phone" className="contactInfo">
            <img src={ phonePic } alt="phone"/>
            (517) 488-3919
          </a>
        </div>
        <div className="contact">
          <a href="mailto:bortkyle18@gmail.com" target="_blank" rel="noreferrer" id="email" className="contactInfo">
            <img src={ emailPic } alt="email"/>
            bortkyle18@gmail.com
          </a>
        </div>
      </address>
    </>
  )
}

export default Contact