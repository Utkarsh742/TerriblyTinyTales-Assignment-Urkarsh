import React from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/word-analyzer')
  }
  return (
    <div className="container">
      <div className='box-cover'>
        <h1>
          <span>Let's dive in the</span> world of words
        </h1>
        <button onClick={handleClick}>Submit</button>
      
        <p>*Click the Submit button to start the process</p>
      </div>
    </div>
  )
}

export default HomePage