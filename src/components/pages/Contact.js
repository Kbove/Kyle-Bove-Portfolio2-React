import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const styles = {
  div: {
    backgroundColor: 'gray',
    color: 'white',
    borderBottom: '3px solid black'
  },

  h1: {
    marginTop: '15px',
    borderTop: 'black',
    color: 'red',
    padding: 20,
    marginBottom: '-30px',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'black'
  },

  form: {
    display: 'flex',
  },

  name: {
    display: "grid",
    margin: '30px',
    marginRight: '500px'
  },

  email: {
    display: 'grid',
    margin: '30px',
    marginRight: '500px'
  },

  message: {
    display: 'grid',
    margin: '30px',
    marginRight: '500px'
  },

  button: {
    marginTop: '15px',
    marginBottom: '15px'
  },
}

const form = {
  name: 'James',
  notes: 'Check this out!'
};

emailjs.send('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', form, '<YOUR USER ID>')
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log('FAILED...', err);
  });

function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      alert('Email or username is invalid');
      return;
    }

    setUserName('');
    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (
    <div>
      <h1 style={styles.h1} >Contact Me</h1>
      <form style={styles.div} ref={form} onSubmit={emailjs.send}>
        <div style={styles.name} >
          <label>Name</label>
          <input value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username" />
        </div>
        <div style={styles.email} >
          <label>Email</label>
          <input value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email" />
        </div>
        <div style={styles.message} >
          <label>Message</label>
          <textarea name="message" />

          <input style={styles.button} type="submit" value="Send" onClick={handleFormSubmit}/>
        </div>
      </form>
    </div>
  );
}

export default Contact;
