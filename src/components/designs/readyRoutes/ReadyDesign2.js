import React from 'react';
import Design2 from '../design2/DesignReady2'
import PdfMaker from '../Pdfmaker';
const ReadyDesign2 = ()=>{
const page = <Design2/>
return(
    <PdfMaker page={page}/>
)
}
export default ReadyDesign2;