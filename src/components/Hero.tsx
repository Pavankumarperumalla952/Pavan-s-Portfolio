import { useState, useEffect, MouseEvent } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, Terminal, Cpu, Box, Code2, Layers, CheckCircle2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ThreeScene3D from './ThreeScene3D';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    setCanHover(hoverMedia.matches && !motionMedia.matches);

    const handler = () => {
      setCanHover(hoverMedia.matches && !motionMedia.matches);
    };

    hoverMedia.addEventListener('change', handler);
    motionMedia.addEventListener('change', handler);
    return () => {
      hoverMedia.removeEventListener('change', handler);
      motionMedia.removeEventListener('change', handler);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!canHover) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to +10 degrees
    const y = (clientY / innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden anime-grid"
    >
      {/* Huge Dynamic Neon Radiant Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/25 blur-[160px] rounded-full pointer-events-none animate-subtle-float" />
      <div className="absolute top-1/3 -left-36 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none animate-subtle-float-reverse" />
      <div className="absolute bottom-10 -right-28 w-[550px] h-[550px] bg-pink-500/20 blur-[150px] rounded-full pointer-events-none animate-subtle-float" />

      {/* Background Watermark */}
      <div className="absolute top-24 right-8 pointer-events-none select-none opacity-5 font-black text-9xl font-display uppercase tracking-widest text-white hidden md:block">
        PAVAN
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Interactive CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* 3D Animated Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/50 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/20 backdrop-blur-md animate-subtle-float">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono tracking-wider font-bold">NEXT-GEN 3D TECH PORTFOLIO</span>
            </div>

            {/* Headline with Huge Gradient Flow */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-5">
              Hi! I’m <br />
              <span className="anime-gradient-text animate-gradient-flow text-glow-cyan">
                Pavan Kumar Perumalla
              </span>
            </h1>

            {/* Role & Academic Focus */}
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-semibold text-cyan-400 mb-6 bg-cyan-950/40 px-4 py-2 rounded-xl border border-cyan-500/30 shadow-md">
              <Terminal className="w-5 h-5 shrink-0 text-purple-400 animate-pulse" />
              <p className="leading-snug">
                B.Tech Student &bull; Electronics & Communication Engineering &bull; Software & AI Enthusiast
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              <p>
                I'm currently pursuing my B.Tech degree at{' '}
                <strong className="text-slate-900 dark:text-white font-semibold text-cyan-300 underline decoration-cyan-500/40 underline-offset-4">
                  Lendi Institute of Engineering Technology
                </strong>
                . With a strong foundation in Electronics and Communication Engineering, I am passionate about software
                development, artificial intelligence, and building impactful digital solutions.
              </p>
              <p>
                I enjoy discovering how technology works and turning ideas into practical, real-world systems. Rather than
                confining knowledge to theory, I actively build, experiment, and refine my engineering skills.
              </p>
            </div>

            {/* Core Focus Areas */}
            <div className="w-full mb-8 pt-4 pb-4 border-y border-cyan-500/30 bg-white/[0.02] rounded-xl px-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-2 font-mono flex items-center gap-2">
                <Box className="w-4 h-4 text-pink-400 animate-bounce" style={{ animationDuration: '3s' }} /> Focus Domains • Core Specializations
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono">Software Dev</span>
                <span className="text-pink-500 font-bold">&bull;</span>
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/30 font-mono">Artificial Intelligence</span>
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span className="px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-300 border border-pink-500/30 font-mono">Web Technologies</span>
                <span className="text-purple-400 font-bold">&bull;</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono">Android Dev</span>
                <span className="text-pink-500 font-bold">&bull;</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">IoT & Hardware</span>
              </div>
            </div>

            {/* CTA Buttons with Huge 3D Tactile Interactions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-3d inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 rounded-xl shadow-xl shadow-cyan-500/30 cursor-pointer font-mono"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Pavan_Kumar_Perumalla_Resume.pdf"
                className="btn-3d inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-cyan-500/40 rounded-xl shadow-md font-mono"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-3d inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-purple-600 dark:text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/30 border border-purple-500/50 rounded-xl cursor-pointer font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-cyan-400/80">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn-3d p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-cyan-400 border border-cyan-500/30 shadow-md transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-3d p-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-md transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-3d p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-md transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech 3D Three.js Interactive Core */}
          <div className="lg:col-span-6 flex justify-center relative perspective-1000">
            <div
              className="relative w-full max-w-[480px] sm:max-w-[520px] transition-transform duration-300 ease-out preserve-3d"
              style={{
                transform: canHover
                  ? `perspective(1000px) rotateY(${mouseOffset.x * 0.4}deg) rotateX(${-mouseOffset.y * 0.4}deg)`
                  : 'none'
              }}
            >
              {/* Back ambient radial neon glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/30 rounded-3xl blur-3xl -z-10 scale-95" />

              {/* 3D Glass Container for Three.js */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-[#0d0e1a]/90 backdrop-blur-2xl shadow-2xl p-3 holo-sheen">
                <ThreeScene3D />
              </div>

              {/* Floating 3D Badge 1: Top Right */}
              <div
                className="absolute -top-5 -right-3 sm:-right-6 bg-[#121324]/95 border border-purple-500/50 rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-subtle-float"
                style={{
                  transform: canHover
                    ? `translate3d(${-mouseOffset.x * 0.9}px, ${-mouseOffset.y * 0.9}px, 25px)`
                    : 'none'
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                  <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">AI & Systems</div>
                  <div className="text-[11px] text-purple-300 font-mono font-semibold">Autonomous Logic</div>
                </div>
              </div>

              {/* Floating 3D Badge 2: Bottom Left */}
              <div
                className="absolute -bottom-6 -left-3 sm:-left-6 bg-[#121324]/95 border border-cyan-500/50 rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-subtle-float-reverse"
                style={{
                  transform: canHover
                    ? `translate3d(${-mouseOffset.x * 1.3}px, ${-mouseOffset.y * 1.3}px, 30px)`
                    : 'none'
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">ECE + IoT Edge</div>
                  <div className="text-[11px] text-cyan-300 font-mono font-semibold">Hardware Telemetry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
