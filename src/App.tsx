import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return true; // Default to dark mode matching the reference aesthetic
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col">
      <AmbientBackground />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Hobbies />
        <Education />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
