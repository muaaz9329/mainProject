import React, { useState, useEffect,useContext } from 'react';
import {Link,NavLink} from 'react-router-dom'
import { ThemeContext } from '../../contextAPI/ContextApi';
//takes a page as a prop and renders it with navbar and container and logo
const Cont = (props)=>{
    const page = props.page;
    const {mode,setMode,theme,setTheme} = useContext(ThemeContext)
    return(
        <div className=" animate__animated " id={mode.containerTheme} >
          {page}
    </div>);
    //->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->
}
export default Cont;