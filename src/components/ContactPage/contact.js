import emailjs from 'emailjs-com'
import React, { useState, useEffect } from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
function Contact (){
  const toast = useToast();
  delete theme.styles.global

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgtuv2q', 'template_y3hv12l', e.target, 'pNHewHZ_2Cpgschb5')
      .then((result) => {
        toast({
          title: 'Success',
          description: "Your message was sended successfully",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }, (error) => {
        toast({
          title: 'Failed',
          description: "Some problem have occured, Please try again later.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
      );
      e.target.reset();
  };



    return(
    <ChakraProvider theme={theme} resetCSS={false}>
    <div className="contact">
    <div className="contact-heading">
      <h1 className="createResume-heading animate__animated animate__fadeInDown animate__slow"> <div className="highlight">Contact<div className="bigtext">Now</div></div></h1>
      <form id="form" className="topBefore" onSubmit={sendEmail}>
        <div className="Education-part contact-pos animate__animated animate__fadeInLeft animate__slow">

        <input id="Education padding1" className="left-box-input " type="text" required='true' placeholder="Name" name='user_name'/>
        <input id="Education padding2" className="left-box-input " type="text" required='true' placeholder="E-mail" name='user_email'/>

        <textarea id="message padding3" className="aboutDegree-textarea" type="text" placeholder="Your Message" name='message'></textarea> 
                          
      </div>
      
          <button className="button-81" role="button" onSubmit={sendEmail}>Submit</button>


    </form>
    </div>
  </div></ChakraProvider>)
}
export default Contact;