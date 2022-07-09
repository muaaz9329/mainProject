import React, { useState, useEffect,useContext } from 'react';

import design1 from './Designs-images/1.jpg'
import design2 from './Designs-images/2.jpg'
import design3 from './Designs-images/3.jpg'
import {Link,NavLink} from 'react-router-dom'
import { DesignContext,InfoContext } from '../../contextAPI/ContextApi';
//
export const SubmitPage =()=>{
  const {check,setCheck} =useContext(DesignContext)
  const {totalInfo,setTotalInfo}=useContext(InfoContext)
  console.log(check)
    return(<>
    <div className="containersz secondary-cont animate__animated animate__fadeIn" >
    <div className="createResume">
      <div className="input-personal-form">
  <div className="Education-info"> 
    <div className="input-personal-form">
      <div id="form" className="topBefore">
      <h3 className="submit-page-heading">Designs</h3>
      </div>    

      <div className="submit-page-cont">
      <div className="checkbox checkbox-margins">
        <div className="checkbox-item ch-item1">
      <Link to="/design/1" state={{data:totalInfo}}><img className='design-template' src={design1}></img></Link>
        </div>
        <div className="checkbox-item ch-item2">
       <Link to="/design/2" state={{data:totalInfo}}> <img className='design-template' src={design2}></img></Link>
        </div></div>
        <div className="CheckBox checkbox-margins">
        <div className="checkbox-item ch-item3">
      <Link to="/design/3" state={{data:totalInfo}}> <a href='/'> <img className='design-template2' src={design3}></img></a></Link>
        </div>
        </div>
        
      </div>
             

          </div>

    
    </div>
    </div>
   </div></div>
    
    </>)
}