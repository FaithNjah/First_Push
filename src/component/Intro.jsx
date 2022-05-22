import React from 'react'
import './intro.css'
import me from '../../src/images/me.jpeg'

const Intro = () => {
  return (
    <div className = 'main-div'>
      <div className = 'left-div'>
        <div className = 'left-wrapper'>
          <h2 className="intro">Hello, my name is</h2>
          <h1 className="name"> Faith Njah</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Frontend Web Developer||React JS</div>
              <div className="title-item">Blockchain Developer || Solidity</div>
              <div className="title-item">Technical Writer</div>
            </div>
          </div>
          <div className="description">
           
          </div>
        </div>
      </div>
      <div className = 'right-div'>
        <div className="bg"></div>
        <img src={me} alt="" className = 'img' />
      </div>
    </div>
  )
}

export default Intro
