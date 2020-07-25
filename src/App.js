import React from 'react';
import Sidebar from './components/asideBar'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Etude from './components/education'
import Work from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Social from './components/social'
import './App.css';

class App extends React.Component {
  render () {
  return (
    <div  id="colorlib-page">
       <div   id="container-wrap">
       <Sidebar/>
       </div>
       <div id="colorlib-main">
         <Intro/>
         <About/>
         <Skills/>
         <Etude/>
         <Work/>
         <Projects/>
         <Social/>
         <Contact/>
       </div>
      
     </div>
  
  );
}
}

export default App;
