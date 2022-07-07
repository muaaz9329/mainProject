import React ,{useCallback, useRef}from "react";
import * as htmlToImage from 'html-to-image';
import { toPng,toJpeg } from 'html-to-image';
const PdfMaker=(props)=>{
    const ref = useRef()

    const onButtonClick = useCallback(() => {
      if (ref.current === null) {
        return
      }
  
      toPng(ref.current, { cacheBust: true })
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
      <> <div className="cont-last-btn">
        <button onClick={onButtonClick} className='button-81 last-btn'>Click me</button>
        <div className="download-head">
        <h1 className="download-head-1">To</h1><h1 className="download-head-2">Download</h1></div>
        </div>
        <div ref={ref} className='downImage'>
        {props.page}
        </div>
        
      </>
    )




}
export default PdfMaker;