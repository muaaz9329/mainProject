import React, { useState, useEffect, useContext } from 'react';
import Design1 from './designs/design1/Design1';
import { InfoContext,DesignContext } from '../contextAPI/ContextApi';
export const DesignOne=()=>{
    const{totalInfo,setTotalInfo}=useContext(InfoContext)
    const{check,setCheck}=useContext(DesignContext)
    const {data,setData}=useState()
    console.log(totalInfo)
    return(
        <div>
           {check===false && <Design1 data={totalInfo}/>}
        </div>
    )
};