import React, { useState, useRef, useEffect } from 'react';

import { 
  Home, User, Briefcase, Contact, Award, 
  Moon, Sun, Code, Terminal, Linkedin, 
  Send, MessageCircle, MapPin, FileText 
} from 'lucide-react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaReact, 
  FaBootstrap,
  FaLinkedin
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Mail } from 'lucide-react';
import im from './assets/img.png';
import us from './assets/user.png';
import fil from './assets/film.png';
import goog from './assets/google.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionKey) => {
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionKey);
  };

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 top-0 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center p-4 px-[15%]">
          <div className="text-2xl font-bold flex items-center text-purple-600">
            Vennela Bittla 
            {/* <Send className="ml-2 text-purple-600" /> */}
          </div>
          
          <div className="flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-600 transition-colors ${
                  activeSection === section ? 'text-purple-600 font-bold' : ''
                }`}
              >
                {section}
              </button>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-indigo-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={sectionRefs.home} className="container mx-auto px-[15%] pt-24 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`space-y-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            <h1 className="text-5xl font-bold text-purple-600">Hi, I'm Vennela Bittla</h1>
            <p className="text-2xl">A passionate Web Developer creating innovative digital solutions</p>
            <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vennela-bittla-667bb4336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:vennela.bittla@gmail.com"
                  className="w-6 h-6 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <Mail />
                </a>
            </div>

            <button 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Download Resume
            </button>
          </div>
          <div className="flex justify-center">
            <div className={`w-80 h-80 rounded-full border-4 ${isDarkMode ? 'border-gray-700' : 'border-purple-100'} overflow-hidden shadow-xl`}>
              <img 
                src={im}
                alt="Vennela Bittla" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="container mx-auto px-[15%] py-16 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>About Me</h2>
            <p className="text-lg">
              I'm a dedicated web developer with a passion for creating robust and user-friendly digital solutions. 
              My journey in technology is driven by curiosity, innovation, and a continuous desire to learn.
            </p>
            <p className="text-lg">
              Specialized in modern web technologies, I transform complex problems into elegant, efficient web applications 
              that deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-purple-600" />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="text-purple-600" />
                <span>B.Tech in Computer Science</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Web Development", percentage: 90 },
              { title: "React", percentage: 85 },
              { title: "Tailwind CSS", percentage: 80 },
              { title: "JavaScript", percentage: 75 }
            ].map((skill, index) => (
              <div key={index} className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.title}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="container mx-auto px-[15%] py-16">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
            { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
            { name: "React", icon: FaReact, color: "text-cyan-500" },
            { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
          ].map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl text-center transform hover:scale-110 transition-transform shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-200' 
                  : 'bg-white text-gray-800'
              }`}
            >
              <skill.icon className={`mx-auto mb-4 ${skill.color}`} size={50} />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section ref={sectionRefs.projects} className="container mx-auto px-[15%] py-16">
  <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
    Innovative Projects
  </h2>
  
  <div className="space-y-20">
    {/* FilmBuzz Project */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className={`space-y-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        <h3 className="text-3xl font-bold text-purple-600">FilmBuzz</h3>
        <p className="text-lg">
        An innovative movie streaming platform designed to bring cinema to your fingertips. With a user-centric design and cutting-edge technology, FilmBuzz offers an immersive entertainment experience for audiences worldwide.
        </p>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "Bootstrap"].map((tech, index) => (
            <span 
              key={index} 
              className={`px-4 py-1 rounded-full text-sm ${
                isDarkMode 
                  ? 'bg-purple-900 text-purple-200' 
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://vennelabittla.github.io/FilmBuzz/" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Project
          </a>
          {/* <a 
            href="https://vennelabittla.github.io/FilmBuzz/" 
            className={`inline-block px-6 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode 
                ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900' 
                : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            }`}
          >
            GitHub
          </a> */}
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
      <img 
        src={fil}
        alt="Film Buzz" 
        className="w-full h-full object-cover"
        
      />
        
      </div> 
    </div>

    {/* User Profile Management System */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
        <img 
          src={us}
          alt="User Profile Management System" 
          className="w-full h-full object-cover"
        />
        
      </div>
      <div className={`space-y-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        <h3 className="text-3xl font-bold text-teal-600">User Profile and Management System</h3>
        <p className="text-lg">
          Developed a robust user profile management system with comprehensive 
          features including role-based access control, detailed analytics, 
          and secure authentication mechanisms.
        </p>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "Bootstrap", "PHP", "JavaScript"].map((tech, index) => (
            <span 
              key={index} 
              className={`px-4 py-1 rounded-full text-sm ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-200' 
                  : 'bg-teal-100 text-teal-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://vennelabittla.github.io/FilmBuzz/" 
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            View Project
          </a>
          {/* <a 
            href="#" 
            className={`inline-block px-6 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode 
                ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900' 
                : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
            }`}
          >
            GitHub
          </a> */}
        </div>
      </div>
    </div>

    {/* Google Clone */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className={`space-y-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        <h3 className="text-3xl font-bold text-blue-600">Google Search Clone</h3>
        <p className="text-lg">
          Created a comprehensive search engine clone with advanced features 
          including real-time search suggestions, responsive design, and 
          efficient search result rendering.
        </p>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS"].map((tech, index) => (
            <span 
              key={index} 
              className={`px-4 py-1 rounded-full text-sm ${
                isDarkMode 
                  ? 'bg-blue-900 text-blue-200' 
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://vennelabittla.github.io/Google-Clone/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
          {/* <a 
            href="#" 
            className={`inline-block px-6 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode 
                ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            GitHub
          </a> */}
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
        <img 
          src={goog}
          alt="Google Search Clone" 
          className="w-full h-full object-cover"
        />
        
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="container mx-auto px-[15%] py-16">
  <h2
    className={`text-4xl font-bold text-center mb-12 ${
      isDarkMode ? 'text-purple-400' : 'text-purple-600'
    }`}
  >
    Contact Me
  </h2>
  <div className="grid md:grid-cols-2 gap-10">
    <div
      className={`p-8 rounded-xl ${
        isDarkMode
          ? 'bg-gray-800 text-gray-200'
          : 'bg-white text-gray-800 shadow-lg'
      }`}
    >
      {/* Updated Form */}
      <form
        action="https://formspree.io/f/manyvwvv"
        method="POST"
        className="space-y-6"
      >
        <input
          type="text"
          name="name" // Add name attribute
          placeholder="Your Name"
          className={`w-full p-3 rounded-lg border-2 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-gray-100 text-gray-800 border-purple-200'
          }`}
          required
        />
        <input
          type="email"
          name="email" // Add name attribute
          placeholder="Your Email"
          className={`w-full p-3 rounded-lg border-2 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-gray-100 text-gray-800 border-purple-200'
          }`}
          required
        />
        <textarea
          name="message" // Add name attribute
          placeholder="Your Message"
          rows={4}
          className={`w-full p-3 rounded-lg border-2 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-gray-100 text-gray-800 border-purple-200'
          }`}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
        >
          <Send className="mr-2" /> Send Message
        </button>
      </form>
    </div>
    <div
      className={`p-8 rounded-xl space-y-6 ${
        isDarkMode
          ? 'bg-gray-800 text-gray-200'
          : 'bg-white text-gray-800 shadow-lg'
      }`}
    >
      <h3 className="text-2xl font-semibold text-purple-600">Contact Information</h3>
      <div className="flex items-center space-x-4">
      <FaLinkedin className="text-purple-600" size={30} />
        <span>Vennela Bittla</span>
      </div>
      <div className="flex items-center space-x-4">
      <Mail className="text-purple-600" size={30} />
        <span>vennela.bittla@gmail.com</span>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className={`py-6 text-center ${
        isDarkMode 
          ? 'bg-gray-800 text-gray-200' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        <p>&copy; 2025 Vennela Bittla. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;