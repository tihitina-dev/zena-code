import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nghz3ns',    // replace
      'ejs-test-mail-service',   // replace
      form.current,
      'wVSilduMgn5L_VGNI'     // replace
    ).then(
      (result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Try again later.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
