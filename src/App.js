import RenderComponents from './components/homepage';
import CreateResume from './components/CreateResume';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ThemeContext} from './contextAPI/ContextApi'
import React, { useState, useEffect } from 'react';
import {InfoContext} from './contextAPI/ContextApi'
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage'
function App() {
  const [mode,setMode]=useState({
    containerTheme:'containersz-light',
    navbar:'topnav-light',
    btnName:'Dark Mode'
  })
  const [info,setInfo]=useState({
  })

  const [theme,setTheme]=useState(true);
  const [totalInfo,setTotalInfo]=useState({})
  return (

    <ThemeContext.Provider value={{mode,setMode,theme,setTheme}}>
      <InfoContext.Provider value={{totalInfo,setTotalInfo}}>
      
    <Router>
      <Routes>
        <Route path='/' element={<RenderComponents />}/>
        <Route path='/createResume' element={<CreateResume/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        
    </Routes>
    </Router>
    
    </InfoContext.Provider>
    </ThemeContext.Provider>
    
  );
}

export default App;
