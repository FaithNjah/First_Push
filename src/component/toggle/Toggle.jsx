import React from 'react'
import './toggle.css'
import me from '../../images/me.jpeg'

const Toggle = () =>{
  
  return (
    <div className = 't'>
      <img src= {me} alt="" className="t-icon" />
      <img src= {me} alt="" className="t-icon" />
      <div className ="t-button"></div>
    </div>
  )
}

export default Toggle 
