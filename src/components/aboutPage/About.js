import React, { useState,useEffect } from 'react'
import muaazPic from './imgs/mine.jpg'
import molviPic from './imgs/molvi.jpg'

const About =()=>{
    
    return(<div className="about-div">
    <div className="about-heading">
    <h1 className="createResume-heading animate__animated animate__fadeInDown animate__slow"> <div className="highlight">About<div className="bigtext">ME</div></div></h1>
    
  </div>
  <div className="about-info">
    <div className="grid-container animate__animated animate__fadeInLeft animate__slow" >
      <div className="grid-item1"><p className="about-me">My name is Muaaz khan and this site is developed by me as a passion project, I am a react developer working everyday to improve my skill , Feel free to use it and let me know about your Feedback by contact me through contact page</p></div>
    </div>
    <img className='myimage position-img animate__animated  animate__fadeInRight animate__slow' src={muaazPic} alt="muaz pic"/>

    <div className="grid-container item12 animate__animated animate__fadeInRight animate__slow">
      <div className="grid-item1 item2 "><h1 className="credit-head"><div className="highlight2">Credits</div></h1><p className="about-me2">Developed by <div className="credit-names" >Muaaz Khan(Maazy)</div><br></br>Logo and Font designed by <div className="credit-names" >M.Usman MWA(Maulvi with an attitude)</div></p></div>      
    </div>
    <img className='myimage position-img2 animate__animated animate__fadeInLeft animate__slow' src={molviPic} alt="Usman pic"/>

  </div>
  </div>)
}
export default About;