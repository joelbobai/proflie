import '../css/main.css';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Qualification from '../components/Qualification';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import {Element} from 'react-scroll';
export default function Main() {

   

  return (
            <main className="main">
            
            <Element name="Home" className="home section" id="home">
                <Home />
            </Element>

            
            <Element name="About" className="about section" id="about">
                <About />
            </Element>

            
            <Element name="Skills" className="skills section" >
                <Skills />
            </Element>

            
            <Element name="Qualification" className="qualification section">
                <Qualification />
            </Element>

            
            <Element name="Services" className="services section" id="services">
                <Services  />
            </Element>

            
            <Element name="Portfolio" className="portfolio section" id="portfolio">
                <Portfolio />
            </Element>

            
            <Element name="Project" className="project section">
                <Project />
            </Element>

            
            <Element name="Testimonia" className="testimonial section">
                <Testimonial />
            </Element>

           
            <Element name="Contact"  className="contact section" id="contact">
               <Contact />
            </Element>
        </main>
  )
}
