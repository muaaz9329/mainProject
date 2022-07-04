import React, { useState, useEffect } from 'react';
import Contact from './ContactPage/contact';
import HeaderCont from './constantComponents/HeaderCont'
const ContactPage=()=>{
    const page = <Contact/>
    return(<>
    <HeaderCont page={page}/>
    </>)
}
export default ContactPage;