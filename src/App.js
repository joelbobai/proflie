// import logo from './logo.svg';
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Scrollup from './components/Scrollup';
import Main from './pages/main';
import './App.css';
import {scroller} from 'react-scroll';
import alanBtn from "@alan-ai/alan-sdk-web";


function App() {
  
// *Purple 250 - Green 142 - Blue 230 - Pink 340
useEffect(() => {
  alanBtn({
    key: '8876bf50dc17d5042973e3e1a623b3172e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand: (commandData) => {
      
      switch(commandData.command) {
        case 'changeColourBlue':
          document.querySelector(':root').style.setProperty('--hue-color', "230");
          break;
        case "changeColourPurple":
          document.querySelector(':root').style.setProperty('--hue-color', "250");
          break;
        case 'changeColourGreen':
          document.querySelector(':root').style.setProperty('--hue-color', "142");
          break;
        case 'changeColourPink':
          document.querySelector(':root').style.setProperty('--hue-color', "340");
          break;
        case 'changeColourYellow':
          document.querySelector(':root').style.setProperty('--hue-color', "67");
          break;
        case 'changeColourRed':
          document.querySelector(':root').style.setProperty('--hue-color', "1");
          break;  
        case 'lightMode':
          document.getElementById("body").classList.remove("dark-theme");
          break;
        case 'darkMode':
          document.getElementById("body").classList.add("dark-theme");
          break;
        case 'goHome':
          scroller.scrollTo(`Home`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break;    
        case 'goAbout':
          scroller.scrollTo(`About`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break;
        case 'goSkills':
          scroller.scrollTo(`Skills`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goQualification':
          scroller.scrollTo(`Qualification`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goServices':
          scroller.scrollTo(`Services`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goPortfolio':
          scroller.scrollTo(`Portfolio`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goProject':
          scroller.scrollTo(`Project`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goTestimonia':
          scroller.scrollTo(`Testimonia`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goContact':
          scroller.scrollTo(`Contact`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'goDown':
          scroller.scrollTo(`Down`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          break; 
        case 'y':
          // code block
          break;                          
        default:
          // code block
      }

    }
  });
}, []);


  return (
    <div className='App'>
      <Navbar />
      <Main />
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;

