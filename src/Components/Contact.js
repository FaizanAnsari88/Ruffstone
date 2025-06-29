import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    
    


            <div className="container contactcontainer ">
                <div className="contactInfo"> 
                    <div>
                        
                        <img className='bottomimage' src="Image/slide3.webp" alt="" />
                    </div>
                
                </div>
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                </div>
                </div>
                    
                    
             
        

    </>
    
  
                    )}
export default Contact;
