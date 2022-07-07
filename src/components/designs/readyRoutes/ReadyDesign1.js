import React, { useState, useEffect } from 'react';
import Design1 from '../design1/Design1';
import PdfMaker from '../Pdfmaker';
const ReadyDesign1 = ()=>{
    const page = <Design1/>
    return(
        <PdfMaker page={page}/>
    )
}
export default ReadyDesign1;