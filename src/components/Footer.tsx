import { ArrowUp, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-cyan-500/20 bg-[#06070c] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold font-display text-white flex items-center gap-2 justify-center md:justify-start">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                PORTFOLIO
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              B.Tech Student &bull; Electronics & Communication Engineering &bull; Lendi Institute
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:text-cyan-400 hover:border-cyan-500/30 border border-transparent transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:text-blue-400 hover:border-blue-500/30 border border-transparent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:text-purple-400 hover:border-purple-500/30 border border-transparent transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-xl bg-white/5 hover:text-pink-400 hover:border-pink-500/30 border border-transparent transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Pavan_Kumar_Perumalla_Resume.pdf"
              className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-semibold font-mono"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. 3D Anime Tech Edition. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 font-semibold transition-colors cursor-pointer"
          >
            <span>Top of Matrix</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
