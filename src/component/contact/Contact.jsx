import React, { useRef } from 'react'
import './contact.css'
import me from '../../images/me.jpeg'




const Contact = () => {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className = 'c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">lets discuss projects</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={me} 
                        alt="" 
                        className = 'c-icon'
                        />
                        08105514789
                    </div>
                    <div className="c-info-item">
                        <img src={me} 
                        alt="" 
                        className = 'c-icon'
                        />
                        faithnjah5@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={me} 
                        alt="" 
                        className = 'c-icon'
                        />
                        marine base estate.
                    </div>
                    
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">You can contact me using the information provided below:
                </p>
                <form ref = {formRef} onSubmit = {handleSubmit} >
                    <input type="text"  placeholder ='Name' name ='user_name'/>
                    <input type="text"  placeholder ='Subject' name ='user_subject'/>
                    <input type="text"  placeholder ='Email' name ='user_Email'/>
                    <textarea name="Message" placeholder="message" cols="30" rows="5"></textarea>
                    <button > Submit </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
