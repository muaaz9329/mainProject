import React, { useState, useEffect } from 'react';
import Design2 from '../design2/Design2'
import PdfMaker from '../Pdfmaker';
const ReadyDesign2 = ()=>{
const page = <Design2/>
return(<div>
    <PdfMaker page={page}/>
</div>)
}
export default ReadyDesign2;