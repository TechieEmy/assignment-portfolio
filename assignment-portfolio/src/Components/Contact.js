import {useState} from 'react';
import React from 'react'
import './contact.css'



export default function Contact() {
const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div className='contact'>
      <div className='leftside'>
        <img src='./assets/shk.png' alt='' id='1'/>
      </div>

      <div className='rightside'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'></input>
          <textarea placeholder='message' type='text'/>

          <button type='submit'> <span className='send'>Send</span></button>
          
          {message && alert(`I'll reply soon`)}
          
        </form>
       
      </div>

      
    </div>
  )
}
