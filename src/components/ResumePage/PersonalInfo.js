import React, { useState, useEffect,useContext } from 'react';
import { InfoContext } from '../../contextAPI/ContextApi';

import HeaderCont from '../constantComponents/HeaderCont';
import './style.css'
const PersonalInfo = ()=>{
  const{totalInfo,setTotalInfo}=useContext(InfoContext);
  const [perData,setPerData]=useState({})
  let obj1={}
  let obj3={}
  let obj2 ={}

function handleChange(e){
  const {name,value}=e.target;
  
 // obj1 = Object.assign({},obj3)
 // obj3={...obj1,[name] : value}
 // var tempData=Object.assign({},obj2)
 // obj2={...tempData,PersonalData:obj3}
  setTotalInfo(prevState => ({
    ...prevState,
    PersonalData: {
        ...prevState.PersonalData,
        [name]: value}}))
  console.log(totalInfo)
  

  //    <input id="email" className="mid-box-input" type="text" placeholder="email" name="email" onChange={handleChange}/>

}
return(<div className="createResume">
<h1 className="createResume-heading animate__animated animate__fadeInDown animate__slow"> <div className="highlight"> LETS<div className="bigtext"> CREATE</div></div></h1>
<div className="personal-info"> <h3 className="createResume-heading sub-head sub-head1">  Personal Info</h3>
<div className="input-personal-form">
  <form id="form" className="topBefore">

    <input id="name" className="left-box-input" type="text" placeholder="First Name" name="firstName" required='true' onChange={handleChange}/>
    <input id="input-emial" className="" type="text" placeholder="email" name="email" required='true'  onChange={handleChange}/>

    <input id="phone-no" className="mid-box-input" type="text" placeholder="phoneNo" name="phoneNo" required='true'  onChange={handleChange}/>
    <input id="prof-name" className="right-box-input" type="text" placeholder="profession"  name="profession" required='true'  onChange={handleChange}/>

    <input id="address" className="right-box-input" type="text" placeholder="address" name="address" required='true'  onChange={handleChange}/>
    <input id="name" className="left-box-input input-lastName" type="text" placeholder="Last Name" name="lastName" required='true' maxlength='295' onChange={handleChange}/>


    <textarea id="message" className="about-textarea" type="text" placeholder="WRITE ABOUT YOURSELF i.e YOUR HOBBIES, INTREAST.." name="userInfo" onChange={handleChange}></textarea>                   

</form>
</div>
</div>
</div>
)
}
export default PersonalInfo;