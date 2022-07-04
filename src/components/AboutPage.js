import React, { useState, useEffect } from 'react';
import HeaderCont from './constantComponents/HeaderContOV';
import About from './aboutPage/About'
function AboutPage(){
    const page = <About/>
    return(<>
        <HeaderCont page={page}/>
    </>
    )
}
export default AboutPage;