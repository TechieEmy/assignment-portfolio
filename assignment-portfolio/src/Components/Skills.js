import React from 'react'
import './skills.css'
import { BsCheck } from 'react-icons/bs';


export default function Skills() {
  return (
    <div className='skills'>
      <h1>My Skills</h1>
      
      <ul>
      
      <BsCheck className='icon'/><li>Web Development</li>
        <BsCheck  className='icon'/><li> UI/UX <span>(aspiring)</span></li>
        <BsCheck  className='icon'/> <li>Mobile Development <span>(aspiring)</span></li>
        <BsCheck  className='icon'/><li>Product Management <span>(aspiring)</span></li>
      </ul>

      
    </div>
  )
}
