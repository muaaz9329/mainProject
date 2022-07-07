import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../contextAPI/ContextApi';
const SkillPage = ()=>{
  var propertyName;
  const {totalInfo,setTotalInfo}=useContext(InfoContext);
  const [skill,setSkill]=useState({});
  const [skillInfo, setSkillInfo] = useState({})
  const [edubox,setEdubox] = useState([{Id:0}])
  const newInputBox=()=>{
    if(edubox.length <=4){
   var Id=edubox.length;
   var obj ={Id:Id}
    var arr = edubox.slice()
    arr.push(obj);
    setEdubox(arr);}
  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    propertyName = 'item'+edubox.length
    // setSkillInfo((olddata)=>{
    //   return{...olddata,[name]:value}
    // })
    // setSkill((oldData)=>{
    //   return{...oldData,[propertyName]:skillInfo}
    // })
    // setTotalInfo((oldData)=>{
    //   return{...oldData,SkillInfo:skill}
    // })
    setTotalInfo(prevState => ({
      ...prevState,
      SkillData: {
          ...prevState.SkillData,
          [propertyName]:{...prevState.SkillData[propertyName],
            [name]: value}}}))
  }
  const handleChange2=(e)=>{
    document.getElementsByClassName('edit-items')[0].oninput = function () {
      var max = parseInt(this.max);

      if (parseInt(this.value) > max) {
          this.value = max; 
      }
  }
    const {name,value}=e.target
    propertyName = 'item'+edubox.length
    // setSkillInfo((olddata)=>{
    //   return{...olddata,[name]:value}
    // })
    // setSkill((oldData)=>{
    //   return{...oldData,[propertyName]:skillInfo}
    // })
    // setTotalInfo((oldData)=>{
    //   return{...oldData,SkillInfo:skill}
    // })
    setTotalInfo(prevState => ({
      ...prevState,
      SkillData: {
          ...prevState.SkillData,
          [propertyName]:{...prevState.SkillData[propertyName],
            [name]: value}}}))
    console.log(totalInfo)
  }

    return(<div className="containersz secondary-cont animate__animated animate__fadeIn" >
    <div className="createResume">
      <div className="input-personal-form">
  <div className="Education-info"> <h3 className="createResume-heading sub-head">Skill Info</h3>
    <div className="input-personal-form">
      <div id="form" className="topBefore">
        {
          edubox.map((d)=>{
            const id = d.Id+1
            return(
              <div className="Education-part ">
          <div className="skill-part" key={d.Id}>
          <h3 className="counter">{id}:</h3>
        <input  className="box-width left-box-input" type="text" placeholder="NAME OF SKILL" name='skillName' onChange={handleChange}/>
        <input  className="mid-box-input stars-input edit-items" type="number" placeholder="1-5" min="1" max="5" name='skillStars' onChange={handleChange2}/>
      </div>
      </div>
            )
          })
        }
        
      </div>          
      
      
          <button className="button-81" role="button" onClick={newInputBox}>+</button>
          <Link to='/choDesign'><button className="button-81 next-btn">Next</button></Link>
          </div>

    
    </div>   
    </div>
   </div></div>)
}
export default SkillPage;