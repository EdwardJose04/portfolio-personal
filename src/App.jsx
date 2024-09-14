import React, { useState } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import EdwardDark from './assets/img/edward-logo-dark.png';
import EdwardLight from './assets/img/edward-logo-light.png';
import Avatar from './assets/img/avatar.png'
import HTML from './assets/img/html-5.png'
import CSS from './assets/img/css-3.png'
import bootstrap from './assets/img/bootstrap.png'
import tailwind from './assets/img/tailwind.png'
import php from './assets/img/php.png'
import JS from './assets/img/js.png'
import laravel from './assets/img/laravel.png'
import react from './assets/img/react.png'
import mysql from './assets/img/mysql.png'
import nodejs from './assets/img/nodejs.png'
import figma from './assets/img/figma.png'
import staruml from './assets/img/staruml.png'
import codeigniter from './assets/img/codeigniter.png'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white background-light' : 'text-black background'}`}>
      <header className="p-4">
        <div className={`container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 rounded-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
          <div className="flex items-center">
            <img src={isDarkMode ? EdwardDark : EdwardLight} alt="Edward logo" className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-4">
              <li><a href="#about"><h5>SOBRE MÍ</h5></a></li>
              <li><a href="#contact"><h5>CONTACTO</h5></a></li>
              <li><a href="#projects"><h5>PROYECTOS</h5></a></li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'}`}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'} flex items-center`}
            >
              <Globe size={24} />
              <span className="ml-2">{language.toUpperCase()}</span>
            </button>
          </div>

          <button onClick={toggleMenu} className="md:hidden">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'} rounded-lg`}>
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              <li><a href="#about" onClick={toggleMenu}><h5>SOBRE MÍ</h5></a></li>
              <li><a href="#contact" onClick={toggleMenu}><h5>CONTACTO</h5></a></li>
              <li><a href="#projects" onClick={toggleMenu}><h5>PROYECTOS</h5></a></li>
            </ul>
            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'}`}
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'} flex items-center`}
              >
                <Globe size={24} />
                <span className="ml-2">{language.toUpperCase()}</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        
        {/* ABOUT */}
        <section id='about' className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={Avatar} alt="Avatar" className='w-full h-auto' />
          </div>
          <div className="w-full md:w-2/3 md:ml-4"> 
            <div className={`p-2 mt-4 md:mt-20 rounded-lg text-center w-full md:w-96 shadow-lg md:ml-44 ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
              <h1 className='font-bold py-2'>Desarrollador Web Frontend</h1>
              <p> <span className='font-bold'>Estudiante</span> de <span className='font-bold'>Desarrollo de Software</span>, con gran interés en acceder al mercado laboral para poner en práctica mis conocimientos. <span className='font-bold'>Trabajador, comunicativo y comprometido.</span> Deseando encontrar una oportunidad para adquirir más experiencia profesional</p>           
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id='skills'>
          <div className="items-center justify-center my-16"> 
            <div className={`p-2 rounded-lg text-center w-full shadow-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
              <h1 className='font-bold py-2 text-xl '>Habilidades</h1>
              <div className="flex flex-wrap justify-center">
                {[
                  { src: HTML, alt: "HTML" },
                  { src: CSS, alt: "CSS" },
                  { src: JS, alt: "JavaScript" },
                  { src: react, alt: "React" },
                  { src: nodejs, alt: "Node.js" },
                  { src: php, alt: "PHP" },
                  { src: codeigniter, alt: "CodeIgniter" },
                  { src: laravel, alt: "Laravel" },
                  { src: bootstrap, alt: "Bootstrap" },
                  { src: tailwind, alt: "Tailwind" },
                  { src: mysql, alt: "MySQL" },
                  { src: figma, alt: "Figma" },
                  { src: staruml, alt: "StarUML" }
                ].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center m-2">
                    <img src={skill.src} alt={skill.alt} className='h-12 w-auto mb-2'/>
                    <span className="text-sm font-semibold">{skill.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}

        {/* EXPERIENCE */}

        {/* PROJECTS */}

        {/* CONTACT */}

      </main>
    </div>
  );
}

export default App;