import React, { useState } from 'react';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import EdwardDark from './assets/img/edward-logo-dark.png';
import EdwardLight from './assets/img/edward-logo-light.png';
import Avatar from './assets/img/avatar.png';
import HTML from './assets/img/html-5.png';
import CSS from './assets/img/css-3.png';
import bootstrap from './assets/img/bootstrap.png';
import tailwind from './assets/img/tailwind.png';
import php from './assets/img/php.png';
import JS from './assets/img/js.png';
import laravel from './assets/img/laravel.png';
import react from './assets/img/react.png';
import mysql from './assets/img/mysql.png';
import nodejs from './assets/img/nodejs.png';
import figma from './assets/img/figma.png';
import staruml from './assets/img/staruml.png';
import codeigniter from './assets/img/codeigniter.png';
import españa from './assets/img/españa.png'
import UK from './assets/img/uk.png'
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const navItems = [
    { href: "#about", labelEs: "SOBRE MÍ", labelEn: "ABOUT ME" },
    { href: "#skills", labelEs: "HABILIDADES", labelEn: "SKILLS" },
    { href: "#projects", labelEs: "PROYECTOS", labelEn: "PROJECTS" },
    { href: "#contact", labelEs: "CONTACTO", labelEn: "CONTACT" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white background-light' : 'text-black background'}`}>
      <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
        <div className={`container py-2 mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-8 rounded-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
          <div className="flex items-center">
            <img src={isDarkMode ? EdwardDark : EdwardLight} alt="Edward logo" className="h-6 sm:h-8 w-auto" />
          </div>

          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-2 sm:space-x-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="font-semibold font-mono text-sm sm:text-base relative group"
                  >
                    <h5 className='mr-4'>{language === 'es' ? item.labelEs : item.labelEn}</h5>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-1 sm:p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className={`p-1 sm:p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'} flex items-center`}
              >
                <img src={language === 'es' ? españa : UK} alt={language === 'es' ? 'Español' : 'English'} className="w-5 h-3 sm:w-6 sm:h-4" />
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isLangMenuOpen && (
                <div className={`absolute right-0 mt-2 py-2 w-40 sm:w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
                  {['es', 'en'].map((lang) => (
                    <button
                      key={lang}
                      className={`${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-2 text-xs sm:text-sm w-full text-left flex items-center transition-colors duration-300`}
                      onClick={() => toggleLanguage(lang)}
                    >
                      <img src={lang === 'es' ? españa : UK} alt={lang === 'es' ? 'Español' : 'English'} className="w-5 h-3 sm:w-6 sm:h-4 mr-2" />
                      {lang === 'es' ? 'Español' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button onClick={toggleMenu} className="md:hidden p-1">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-2 sm:mt-4 ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'} rounded-lg`}>
          <nav className="px-2 sm:px-4 pt-2 pb-4 flex flex-col items-center">
            <ul className="space-y-2 w-full">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="font-semibold font-mono text-sm sm:text-base text-center block relative group"
                    onClick={toggleMenu}
                  >
                    <h5>{language === 'es' ? item.labelEs : item.labelEn}</h5>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:text-black hover:bg-gray-300'} flex items-center`}
                >
                  <img src={language === 'es' ? españa : UK} alt={language === 'es' ? 'Español' : 'English'} className="w-5 h-3 sm:w-6 sm:h-4" />
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isLangMenuOpen && (
                  <div className={`absolute right-0 mt-2 py-2 w-40 sm:w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
                    {['es', 'en'].map((lang) => (
                      <button
                        key={lang}
                        className={`${isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-2 text-xs sm:text-sm w-full text-left flex items-center transition-colors duration-300`}
                        onClick={() => toggleLanguage(lang)}
                      >
                        <img src={lang === 'es' ? españa : UK} alt={lang === 'es' ? 'Español' : 'English'} className="w-5 h-3 sm:w-6 sm:h-4 mr-2" />
                        {lang === 'es' ? 'Español' : 'English'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Add a spacer to compensate for the fixed header */}
      <div className="h-16 sm:h-24"></div>

      <main className="container mx-auto mt-4 sm:mt-8 p-2 sm:p-4">
        {/* ABOUT */}
        <section id='about' className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={Avatar} alt="Avatar" className='w-full h-auto max-w-xs mx-auto' />
          </div>
          <div className="w-full md:w-2/3 md:ml-4">
            <div className={`p-2 mt-4 md:mt-12 rounded-lg text-center w-full max-w-md mx-auto md:ml-0 lg:ml-24 shadow-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
              <h1 className='font-bold py-2 font-mono text-lg sm:text-xl'>{language === 'es' ? 'Desarrollador Web Frontend' : 'Frontend Web Developer'}</h1>
              <p className='font-mono px-2 py-4 text-sm sm:text-base'>
                <span className='font-bold'>{language === 'es' ? 'Estudiante' : 'Student'}</span> {language === 'es' ? 'de' : 'of'} <span className='font-bold'>{language === 'es' ? 'Desarrollo de Software' : 'Software Development'}</span>, {language === 'es' ? 'con gran interés en acceder al mercado laboral para poner en práctica mis conocimientos.' : 'with great interest in entering the job market to put my knowledge into practice.'}
                <span className='font-bold'>{language === 'es' ? 'Trabajador, comunicativo y comprometido.' : 'Hardworking, communicative and committed.'}</span>
                {language === 'es' ? ' Deseando encontrar una oportunidad para adquirir más experiencia profesional' : ' Eager to find an opportunity to gain more professional experience'}
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id='skills'>
          <div className="items-center justify-center my-8 sm:my-16">
            <div className={`p-2 rounded-lg text-center w-full shadow-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
              <h1 className='font-bold py-2 text-lg sm:text-xl font-mono'>{language === 'es' ? 'Habilidades' : 'Skills'}</h1>
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
                    <img src={skill.src} alt={skill.alt} className='h-8 sm:h-12 w-auto mb-1 sm:mb-2' />
                    <span className="text-xs sm:text-sm font-semibold">{skill.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
         <section id='projects' className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src={Avatar} alt="Avatar" className='w-full h-auto max-w-xs mx-auto' />
          </div>
          <div className="w-full md:w-2/3 md:ml-4">
            <div className={`p-2 mt-4 md:mt-12 rounded-lg text-center w-full max-w-md mx-auto md:ml-0 lg:ml-24 shadow-lg ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}>
              <h1 className='font-bold py-2 font-mono text-lg sm:text-xl'>{language === 'es' ? 'Desarrollador Web Frontend' : 'Frontend Web Developer'}</h1>
              <p className='font-mono px-2 py-4 text-sm sm:text-base'>
                <span className='font-bold'>{language === 'es' ? 'Estudiante' : 'Student'}</span> {language === 'es' ? 'de' : 'of'} <span className='font-bold'>{language === 'es' ? 'Desarrollo de Software' : 'Software Development'}</span>, {language === 'es' ? 'con gran interés en acceder al mercado laboral para poner en práctica mis conocimientos.' : 'with great interest in entering the job market to put my knowledge into practice.'}
                <span className='font-bold'>{language === 'es' ? 'Trabajador, comunicativo y comprometido.' : 'Hardworking, communicative and committed.'}</span>
                {language === 'es' ? ' Deseando encontrar una oportunidad para adquirir más experiencia profesional' : ' Eager to find an opportunity to gain more professional experience'}
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}

      </main>
    </div>
  );
}

export default App;