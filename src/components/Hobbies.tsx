import { PenTool, Video, Globe, BookOpen, Compass, Sparkles } from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Hobbies() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return PenTool;
      case 'Video':
        return Video;
      case 'Globe':
        return Globe;
      case 'BookOpen':
        return BookOpen;
      case 'Sparkles':
      default:
        return Compass;
    }
  };

  const getGlow = (index: number): 'cyan' | 'magenta' | 'purple' => {
    if (index % 3 === 0) return 'magenta';
    if (index % 3 === 1) return 'purple';
    return 'cyan';
  };

  return (
    <section id="hobbies" className="py-24 relative overflow-hidden">
      {/* Background Anime Watermark & 3D Ambient Orbs */}
      <div className="absolute top-12 right-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-pink-400 hidden md:block">
        PASSIONS
      </div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-pink-400 font-mono mb-2">
              CREATIVE PURSUITS • PASSIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              My <span className="anime-gradient-text">Hobbies</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Beyond academics and technology, I have a wide range of interests that keep me curious, creative, and
              constantly thinking from fresh perspectives.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Hobbies Grid with 3D Tilt and Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOBBIES.map((hobby, index) => {
            const Icon = getIcon(hobby.iconName);

            return (
              <ScrollReveal key={hobby.id} direction="up" delay={index * 90}>
                <TiltCard glowColor={getGlow(index)}>
                  <div className="relative group rounded-2xl p-6 sm:p-7 transition-all duration-300 border border-cyan-500/20 bg-[#0f111f]/90 holo-sheen h-full flex flex-col justify-between hover:border-pink-500/50 shadow-2xl preserve-3d">
                    <div>
                      {/* Icon & Index with 3D Popout */}
                      <div className="flex items-center justify-between mb-5" style={{ transform: 'translateZ(20px)' }}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center group-hover:scale-110 shadow-lg shadow-pink-500/20 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30 shadow-sm">
                          ACT // 0{index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2.5 group-hover:text-pink-300 transition-colors"
                        style={{ transform: 'translateZ(16px)' }}
                      >
                        {hobby.title}
                      </h3>

                      {/* Short Highlight */}
                      <div
                        className="text-xs font-semibold text-purple-300 mb-3 font-mono"
                        style={{ transform: 'translateZ(14px)' }}
                      >
                        {hobby.shortDesc}
                      </div>

                      {/* Detailed Description */}
                      <p
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {hobby.fullDesc}
                      </p>
                    </div>

                    {/* Bottom decorative bar */}
                    <div
                      className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400"
                      style={{ transform: 'translateZ(12px)' }}
                    >
                      <span className="flex items-center gap-1.5 font-medium text-purple-300">
                        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                        Inspiration Matrix
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 font-semibold font-mono">
                        EXPLORE &rarr;
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
