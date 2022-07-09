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
import ReadyDesign1 from './components/designs/readyRoutes/ReadyDesign1';
import ReadyDesign2 from './components/designs/readyRoutes/ReadyDesign2';
import ReadyDesign3 from './components/designs/readyRoutes/ReadyDesign3';
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
  const [totalInfo,setTotalInfo]=useState({
    PersonalData:{

    },
    ExperienceData:{
      'item1':{
        companyName:'',
        role:'',
        from:null,
        to:null,
        info:''

      },
      'item2':{
        companyName:'',
        role:'',
        from:null,
        to:null,
        info:''

      },
      'item3':{
        companyName:'',
        role:'',
        from:null,
        to:null,
        info:''

      },
    },
    EducationData:{
      'item1':{
        degName:'',
        instName:'',
        from:null,
        to:null

      },
      'item2':{
        degName:'',
        instName:'',
        from:null,
        to:null

      },
      'item3':{
        degName:'',
        instName:'',
        from:null,
        to:null

      },
    },
    SkillData:{
      'item1':{
        skillName:'',
        skillStars:null
      },
      'item2':{
        skillName:'',
        skillStars:null

      },
      'item3':{
        skillName:'',
        skillStars:null

      },
      'item4':{
        skillName:'',
        skillStars:null

      },
      'item5':{
        skillName:'',
        skillStars:null

      },
    }
  })
  return (

    <ThemeContext.Provider value={{mode,setMode,theme,setTheme}}>
      <InfoContext.Provider value={{totalInfo,setTotalInfo}}>
        <DesignContext.Provider value={{check,setCheck}}>
      
    <Router>
      <Routes>
        <Route path='/design/3' element={<ReadyDesign3/>}/>
        <Route path='/design/2' element={<ReadyDesign2/>}/>
        <Route path='/design/1' element={<ReadyDesign1/>}/>
        <Route path='/choDesign' element={<ChooseDesign/>}/>
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
