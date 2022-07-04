import React, { useState, useEffect ,useContext} from 'react';
import HomePage from './homePage/MainContent';
import { ThemeContext } from '../contextAPI/ContextApi';
import HeaderCont from './constantComponents/HeaderCont';

const RenderComponents=()=>{
  const {mode,setMode,theme,setTheme} = useContext(ThemeContext)
//Function that changes the theme of the site
  const lightTheme={
    background:"#044DF5",
    container:'containersz-light',
    fontColor:'#5D5984',
    navBar:'topnav-light',
    btnName:'Dark Mode'

  }
  const darkTheme = {
    background:'#353839',
    fontColor:'white',
    container:'containersz-dark',
    navBar:'topnav-dark',
    btnName:'Light Mode'
  }


  const changeMode = ()=>{
    if(theme===true){
    document.body.style.backgroundColor=darkTheme.background
    document.body.style.color=darkTheme.fontColor
    setMode({
      containerTheme:darkTheme.container,
      navbar:darkTheme.navBar,
      btnName:darkTheme.btnName
    })
    setTheme(false)
    }
    else if(theme === false){
      document.body.style.backgroundColor=lightTheme.background
      document.body.style.color = lightTheme.fontColor
      setMode({
        containerTheme:lightTheme.container,
        navbar:lightTheme.navBar,
        btnName:lightTheme.btnName
      })
      setTheme(true)
    }
  }
  //->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->
  //renders the homepage component with header and container pre defined , Header-Container(headCont) takes the the rendering page as prop and render the page with header and container )
  const page =<HomePage function={changeMode} Button={mode.btnName} mode={mode}/>
  return(<>
    <HeaderCont page={page}/>
    </>
  )


   
}
export default RenderComponents;