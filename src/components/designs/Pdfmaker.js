import React from "react";
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import  pdfMake from 'pdfmake'
import  pdfFonts from 'pdfmake/build/vfs_fonts'
const PdfMaker=(props)=>{
    const handleFunction=()=>{
    const doc = new jsPDF();
         
    //get table html
    const pdfTable =document.getElementById('divToPrint');;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
  
    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();

    }

return(<>
<div id="divToPrint">
    {props.page}
    </div> 
    <button onClick={handleFunction} className='button-81'>Print</button></>
)



}
export default PdfMaker;