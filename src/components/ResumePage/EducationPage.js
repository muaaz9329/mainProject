import React, { useState, useEffect,useContext } from 'react';
import { InfoContext } from '../../contextAPI/ContextApi';

const EducationPage = ()=>{
  const{totalInfo,setTotalInfo}=useContext(InfoContext);
    var propertyName;
    const [edu,setEdu]=useState({})
    const [eduDetail,setEduDetail]=useState({})
    const [edubox,setEdubox] = useState([{id:0}])

    const newInputBox=()=>{
      if(edubox.length <=2){
     var Id=edubox.length;
     var obj ={id:Id}
      var arr = edubox.slice()
      arr.push(obj);
      setEdubox(arr);}
    }


    //this function adds the propertie of 
    //item[n] where n is the number with which it gets intialize , n is calculted according to the length of array of ids with which the button and input box function works togather  
    const handleChange = (e)=>{
      const {name,value} = e.target;
      propertyName='item'+edubox.length//=>item[n] here n is the length of array of ids
    //   setEduDetail((oldData)=>{
                                             
    //   return {...oldData,[name]:value}//{...olddata}=>saves all the older array, [property]:{[sub-property]:value}=>adds the diffeent sub-properties to the one same property name
    // })
    // setEdu((oldData)=>{
    //   return{...oldData,[propertyName]:eduDetail}
    // })
    // console.log(edu);
    // setTotalInfo((oldData)=>{
    //   return{...oldData,EducationInfo:edu}
    // })
    setTotalInfo(prevState => ({
      ...prevState,
      EducationData: {
          ...prevState.EducationData,
          [propertyName]:{...prevState.EducationData[propertyName],
            [name]: value}}}))
    console.log(totalInfo)
    }

    return(
        <div className="containersz secondary-cont animate__animated animate__fadeIn" >
                <div className="createResume">
                  <div className="input-personal-form">
              <div className="Education-info"> <h3 className="createResume-heading sub-head">Education Info</h3>
                <div className="input-personal-form">
                  
                 
                    {
                      edubox.map((d)=>{
                        const id = d.id+1
                        
                        return( <div id="form" className="topBefore">
                        <div className="Education-part" key={d.id}>
                          
                        <h3 className="counter">{id}</h3>
                        <input id="" className="company-name-input" type="text" placeholder="NAME OF THE DEGREE OR CERTIFICATE" name='degName' onChange={handleChange}/>
                    <input id="dasig" className="top-dasig" type="text" placeholder="NAME OF COLLAGE OR UNIVERISTY" name='instName' onChange={handleChange}/> <div className="for-to">
                    <input id="from-year exp-from" className="top-dasig2 small-width" type="number" placeholder="FROM" name='from' onChange={handleChange}/>
                    <input id="to-year exp-to" className="top-dasig2 small-width" type="number" placeholder="TO" name='to' onChange={handleChange}/>
                  </div>

                                          
                      </div></div>)
                      })
                    }
                  
                      <button className="button-81" role="button" onClick={newInputBox}>+</button>


                
                                
                </div>
               </div>
              </div>
            </div>
          </div>
    )
}
export default EducationPage; 