import React from 'react';
import design1 from './Designs-images/1.jpg'
import design2 from './Designs-images/2.jpg'
import design3 from './Designs-images/3.jpg'
import {Link,NavLink} from 'react-router-dom'
//
export const SubmitPage =()=>{
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
      <button className="button-81 btn-submit-position" role="button" >Submit</button>
      <div className="checkbox checkbox-margins">
        <div className="checkbox-item ch-item1">
        <Link to='/design-1' target="_blank" rel="noopener noreferrer"> <img className='design-template' src={design1}></img></Link>
        </div>
        <div className="checkbox-item ch-item2">
        <img className='design-template' src={design2}></img>
        </div></div>
        <div className="CheckBox checkbox-margins">
        <div className="checkbox-item ch-item3">
       <a href='/'> <img className='design-template' src={design3}></img></a>
        </div>
        </div>
        
      </div>
             

          </div>

    
    </div>
    </div>
   </div></div>
    
    </>)
}