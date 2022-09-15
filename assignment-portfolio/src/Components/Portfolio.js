import React from 'react'
import './portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Portfolio</h1>

      <ul>
        <li className='active'>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
      </ul>

      <div className='container_portfolio'>

        <img src='./assets/image2.jpg' alt=''/>

        <img src='./assets/image2.jpg' alt=''/>

        <img src='./assets/image2.jpg' alt=''/>

      </div>
      
    </div>
  
  )
}
