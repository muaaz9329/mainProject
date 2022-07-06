import RenderComponents from './components/homepage';
import CreateResume from './components/CreateResume';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ThemeContext} from './contextAPI/ContextApi'
import React, { useState, useEffect } from 'react';
import {InfoContext,DesignContext} from './contextAPI/ContextApi'
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ChooseDesign from './components/ChooseDesign';
import {DesignOne} from './components/design';
import Design1 from './components/designs/design1/Design1';
function App() {
  const [mode,setMode]=useState({
    containerTheme:'containersz-light',
    navbar:'topnav-light',
    btnName:'Dark Mode'
  })
  const [info,setInfo]=useState({
  })
  const [check,setCheck]=useState(false)

  const [theme,setTheme]=useState(true);
  const [totalInfo,setTotalInfo]=useState({})
  return (

    <ThemeContext.Provider value={{mode,setMode,theme,setTheme}}>
      <InfoContext.Provider value={{totalInfo,setTotalInfo}}>
        <DesignContext.Provider value={{check,setCheck}}>
      
    <Router>
      <Routes>
        <Route path='/design/1' element={<Design1/>}/>
        <Route path='/choDesign' element={<ChooseDesign/>}/>
        <Route path='/design1' element={<DesignOne/>}/>
        <Route path='/' element={<RenderComponents />}/>
        <Route path='/createResume' element={<CreateResume/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        
    </Routes>
    </Router>
    </DesignContext.Provider>
    
    </InfoContext.Provider>
    </ThemeContext.Provider>
    
  );
}

export default App;
