import HeaderCont from "./constantComponents/HeaderCont"
import EducationPage from "./ResumePage/EducationPage"
import ExperiencePage from "./ResumePage/ExperiencePage"
import PersonalInfo from "./ResumePage/PersonalInfo"
import SkillPage from "./ResumePage/SkillPage"
import Cont from './constantComponents/Cont'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { InfoContext } from "../contextAPI/ContextApi"

const CreateResume = ()=>{
  const {totalInfo,setTotalInfo}=useContext(InfoContext)
    const page=<PersonalInfo/>
  const page2  =<EducationPage/>
    const page3=<ExperiencePage/>
   const page4= <SkillPage/>
console.log(totalInfo)
    return(<>
    <HeaderCont page={page}/>
    <Cont page={page2}/>
    <Cont page={page3}/>
    <Cont page={page4}/>
    
    </>)
    
}
export default CreateResume