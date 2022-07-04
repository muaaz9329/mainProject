import HeaderCont from "./constantComponents/HeaderCont"
import EducationPage from "./ResumePage/EducationPage"
import ExperiencePage from "./ResumePage/ExperiencePage"
import PersonalInfo from "./ResumePage/PersonalInfo"
import SkillPage from "./ResumePage/SkillPage"
import Cont from './constantComponents/Cont'
import { SubmitPage } from "./ResumePage/SubmitPage"
const CreateResume = ()=>{
    const page=<PersonalInfo/>
  const page2  =<EducationPage/>
    const page3=<ExperiencePage/>
   const page4= <SkillPage/>
   const page5 = <SubmitPage/>
    return(<>
    <HeaderCont page={page}/>
    <Cont page={page2}/>
    <Cont page={page3}/>
    <Cont page={page4}/>
    <Cont page={page5}/>
    </>)
}
export default CreateResume