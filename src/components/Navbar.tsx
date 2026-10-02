import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'hobbies', 'education', 'projects', 'skills', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b12]/92 dark:bg-[#06070c]/92 bg-white/92 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-cyan-500/20 py-3.5 translate-z-10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark with Anime Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg sm:text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <span>P</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="group-hover:text-cyan-400 transition-colors leading-none">
                Pavan Kumar
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-cyan-400/70 uppercase">
                ENGINEER • ECE
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex flex-col items-center cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:bg-slate-100/60 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2.5">
            {/* Resume CTA */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Pavan_Kumar_Perumalla_Resume.pdf"
              className="btn-3d hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 border border-cyan-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 bg-[#0a0b12]/95 dark:bg-[#06070c]/95 backdrop-blur-xl border-b border-cyan-500/20 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-cyan-500/20 flex gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Pavan_Kumar_Perumalla_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-xs font-medium text-slate-200 bg-white/10 rounded-lg text-center"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
