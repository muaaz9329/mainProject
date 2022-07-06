import Cont from './constantComponents/Cont'
import React, { useState, useEffect , useContext} from 'react';
import { SubmitPage } from "./ResumePage/SubmitPage"
import Design1 from './designs/design1/Design1';
import { InfoContext } from '../contextAPI/ContextApi';
import { Link } from 'react-router-dom';
const ChooseDesign = ()=>{
    const page5 = <SubmitPage/>
    const {totalInfo,setTotalInfo}=useContext(InfoContext)
    const [WorkingData,setdata]=useState()

    return ( <div> <Cont page={page5}/>
       </div> )
}
export default ChooseDesign;