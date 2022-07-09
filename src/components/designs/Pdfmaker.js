import React ,{useCallback, useEffect, useRef}from "react";
import * as htmlToImage from 'html-to-image';
import { toPng,toJpeg } from 'html-to-image';
const PdfMaker=(props)=>{
  useEffect(()=>{
    alert("Click on the image to download")
  },)
    const ref = useRef()

    const onButtonClick = useCallback(() => {
      if (ref.current === null) {
        return
      }
  
      toJpeg(ref.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = 'my-image-name.png'
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }, [ref])
  
    return (
      <> 
        <button onClick={onButtonClick} >
        <div ref={ref} className='downImage'>
        {props.page}
        </div></button>
        
      </>
    )




}
export default PdfMaker;