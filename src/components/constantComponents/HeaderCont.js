import React, { useState, useEffect,useContext } from 'react';
import {Link,NavLink} from 'react-router-dom'
import { ThemeContext } from '../../contextAPI/ContextApi';
//takes a page as a prop and renders it with navbar and container and logo
const HeaderCont = (props)=>{
    const page = props.page;
    const {mode,setMode,theme,setTheme} = useContext(ThemeContext)
    return(
        <div className=" animate__animated " id={mode.containerTheme} >
        <div className="main-heading">
        <h3 className='text-1'><strong>Resume</strong></h3>
        <h3 className=' text-2' ><strong>Builder</strong></h3>
            <h4 className="version-no">1.0</h4>
        <div className={mode.navbar}>
            <Link to='/' className='home-active'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to="/about">About</Link></div>
    </div>
          {page}
    </div>);
    //->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->
}
export default HeaderCont;