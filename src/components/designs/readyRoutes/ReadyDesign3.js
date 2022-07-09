import Design3 from "../design3/Design3";
import React from 'react';
import PdfMaker from "../Pdfmaker";
const ReadyDesign3 = ()=>{
    const page = <Design3/>
    return(
        <PdfMaker page={page}/>
    )
}
export default ReadyDesign3;