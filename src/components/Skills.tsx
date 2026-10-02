import { Code, Cpu, Wrench, Sparkles, Zap, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code;
      case 1:
        return Cpu;
      case 2:
      default:
        return Wrench;
    }
  };

  const getGlow = (index: number): 'cyan' | 'purple' | 'magenta' => {
    if (index === 0) return 'cyan';
    if (index === 1) return 'purple';
    return 'magenta';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-cyan-500/10">
      {/* Background Anime Watermark & 3D Ambient Orbs */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-purple-400 hidden md:block">
        SKILLS
      </div>
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-purple-400 font-mono mb-2">
              CAPABILITY MATRIX • EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              My <span className="anime-gradient-text">Skills</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              A balanced synthesis of software engineering, artificial intelligence, and hardware electronics.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid with 3D Tilt and Staggered ScrollReveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, cIdx) => {
            const Icon = getCategoryIcon(cIdx);

            return (
              <ScrollReveal key={cIdx} direction="up" delay={cIdx * 110}>
                <TiltCard glowColor={getGlow(cIdx)}>
                  <div className="rounded-2xl p-6 sm:p-7 bg-[#0f111f]/90 border border-cyan-500/20 shadow-2xl flex flex-col justify-between h-full holo-sheen hover:border-purple-500/50 transition-all duration-300 preserve-3d">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4" style={{ transform: 'translateZ(18px)' }}>
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                            {category.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 mb-6 leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                        {category.description}
                      </p>

                      {/* Skills List with 3D Hover Depth */}
                      <div className="space-y-3.5">
                        {category.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 cursor-default group/skill preserve-3d"
                            style={{ transform: 'translateZ(14px)' }}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 group-hover/skill:text-cyan-300 transition-colors">
                                <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover/skill:scale-125 transition-transform" />
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-400 border border-cyan-500/30 group-hover/skill:border-cyan-400 shadow-sm transition-colors">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed group-hover/skill:text-slate-300 transition-colors">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom decorative count */}
                    <div
                      className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-purple-400" />
                        {category.skills.length} MODULES LOADED
                      </span>
                      <span className="text-cyan-400 font-semibold">&bull; SYNCED</span>
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
