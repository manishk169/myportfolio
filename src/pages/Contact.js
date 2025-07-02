// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, your message has been sent.`);
  };

  return (
    <section className='section'>
      <h1>Contact Me</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' onChange={handleChange} required />
        <input name='email' type='email' placeholder='Email' onChange={handleChange} required />
        <textarea name='message' placeholder='Message' onChange={handleChange} required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 
