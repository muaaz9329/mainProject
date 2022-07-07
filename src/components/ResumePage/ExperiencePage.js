import React, { useState, useEffect,useContext } from 'react';
import {InfoContext} from '../../contextAPI/ContextApi'
const ExperiencePage = ()=>{
      var propertyName;
      const {totalInfo,setTotalInfo}=useContext(InfoContext);
      const [exp,setExp]=useState({})
      const [expInfo,setExpInfo]=useState({})
      const [edubox,setEdubox] = useState([{id:0}])
      const newInputBox=()=>{
        if(edubox.length <=2){
       var Id=edubox.length;
       var obj ={id:Id}
        var arr = edubox.slice()
        arr.push(obj);
        setEdubox(arr);}
      }
      const handleOnChange = (e)=>{
        const {name,value} = e.target;
        propertyName='item'+edubox.length//=>item[n] here n is the length of array of ids
      //   setExpInfo((oldData)=>{
                                               
      //   return {...oldData,[name]:value}//{...olddata}=>saves all the older array, [property]:{[sub-property]:value}=>adds the diffeent sub-properties to the one same property name
      // })
      // setExp((oldData)=>{
      //   return{...oldData,[propertyName]:expInfo}
      // })
      // setTotalInfo((oldData)=>{
      //   return{...oldData,ExperienceInfo:exp}
      // })
      setTotalInfo(prevState => ({
        ...prevState,
        ExperienceData: {
            ...prevState.ExperienceData,
            [propertyName]:{...prevState.ExperienceData[propertyName],
              [name]: value}}}))
      console.log("data:"+totalInfo)
      }
    return(
        <div className="containersz secondary-cont animate__animated animate__fadeIn" >
                <div className="createResume">
                  <div className="input-personal-form">
              <div className="Education-info"> <h3 className="createResume-heading sub-head">Experience info</h3>
                <div className="input-personal-form">
                  <div id="form" className="topBefore">
                  {
                      edubox.map((d)=>{
                        const id = d.id+1
                        return(
                          
                    <div className="Education-part" key={id}>
                    <h3 className="counter">{id}:</h3>
                    <input id="" className="company-name-input" type="text" placeholder="NAME OF THE ORGANIZATION/COMPANY" name='companyName' onChange={handleOnChange}/>
                    <input id="dasig" className="top-dasig" type="text" placeholder="YOUR DASIGNATION/ROLE" name='role' onChange={handleOnChange}/> <div className="for-to">
                    <input id="from-year exp-from" className="top-dasig2 " type="number" placeholder="FROM" name='from' onChange={handleOnChange}/>
                    <input id="to-year exp-to" className="top-dasig2" type="number" placeholder="TO" name='to' onChange={handleOnChange}/>
                  </div>
                    <textarea id="message" className="aboutDegree-textarea" type="text" placeholder="ANY ACHIVEMENTS,CERTIFICATES,MEDALS....." name='info' onChange={handleOnChange}></textarea> 
                                      
                  </div>)})}
                  
                      <button className="button-81" role="button" onClick={newInputBox}>+</button>


                </div>
                                
                </div>
               </div>
              
              </div>
            </div>
    </div>
    )
}
export default ExperiencePage;