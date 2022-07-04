import React, { useState, useEffect,useContext } from 'react';
import { InfoContext } from '../../contextAPI/ContextApi';

import HeaderCont from '../constantComponents/HeaderCont';
import './style.css'
const PersonalInfo = ()=>{
  const{totalInfo,setTotalInfo}=useContext(InfoContext);

  const [perData,setPerData]=useState({})

const handleChange=(e)=>{
  const {name,value}=e.target;
  setPerData((oldData)=>{
    return{...oldData,[name]:value}
  })
  setTotalInfo((oldData)=>{
    return{...oldData,PersonalData:perData}
  })
  console.log(totalInfo)
  //    <input id="email" className="mid-box-input" type="text" placeholder="email" name="email" onChange={handleChange}/>

}
return(<div className="createResume">
<h1 className="createResume-heading animate__animated animate__fadeInDown animate__slow"> <div className="highlight"> LETS<div className="bigtext"> CREATE</div></div></h1>
<div className="personal-info"> <h3 className="createResume-heading sub-head sub-head1">  Personal Info</h3>
<div className="input-personal-form">
  <form id="form" className="topBefore">

    <input id="name" className="left-box-input" type="text" placeholder="First Name" name="firstName" onChange={handleChange}/>
    <input id="input-emial" className="" type="text" placeholder="email" name="email" onChange={handleChange}/>

    <input id="phone-no" className="mid-box-input" type="text" placeholder="phoneNo" name="phoneNo" onChange={handleChange}/>
    <input id="prof-name" className="right-box-input" type="text" placeholder="profession"  name="profession" onChange={handleChange}/>

    <input id="address" className="right-box-input" type="text" placeholder="address" name="address" onChange={handleChange}/>
    <input id="name" className="left-box-input input-lastName" type="text" placeholder="Last Name" name="lastName" onChange={handleChange}/>


    <textarea id="message" className="about-textarea" type="text" placeholder="WRITE ABOUT YOURSELF i.e YOUR HOBBIES, INTREAST.." name="userInfo" onChange={handleChange}></textarea>                   

</form>
</div>
</div>
</div>
)
}
export default PersonalInfo;