import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ConfirmEmail from './confirmEmail';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('murray_hill', 'template_wkxau5d', form.current, 'TmisvocKlvlRffcyP')
        .then((result) => {
            console.log(result.text);
            <ConfirmEmail></ConfirmEmail>
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
}

export default Contact