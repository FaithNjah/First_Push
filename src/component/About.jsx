import React from 'react'
import './about.css'
import me from '../../src/images/me.jpeg'
const About = () => {
  return (
    <div className = 'about'>
      <div className = 'about-left'> 
        <div className = 'about-card-bg'> </div>
        <div className = 'about-card-img'> 
            <img src={me} alt=""  className = 'about-img'/>
        </div>
       </div>
      <div className = 'about-right'>
        <h1 className="about-title">About Me</h1>   
        <p className="about-sub">My Career
        </p>
        <p className="about-desc">
        I am a frontend web developer. I build amazing websites for different clients all over the world.
            I build and deploy smart contracts and tokens on the blockchain space and i also write great
            articles explaining different technical concepts.
        </p>
        <div className="about-award">
            <img src={me} alt="" className = 'about-award-image' />
            <div className="about-award-texts">
                <h4 className="about-award-title">Education & Purpose</h4>
                <p className="about-award-desc">
                  I am a student of the University of Uyo, 
                  studying Medical Physiology. While in the health field, 
                  i hope to integrate tech into the health sector and
                  provide fast and solution based services for everyone by using great technologies.
                </p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About
