import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-cyan-500/10">
      {/* Background Anime Watermark */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-cyan-400 hidden md:block">
        ACADEMICS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              ACADEMIC MATRIX • FOUNDATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              My <span className="anime-gradient-text">Education</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Formative milestones and academic foundations shaping my technical problem-solving capabilities.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Education Timeline with 3D Tilt and Staggered ScrollReveal */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION_LIST.map((edu, index) => {
            const isPresent = index === 0;

            return (
              <ScrollReveal key={edu.id} direction="up" delay={index * 120}>
                <TiltCard glowColor={isPresent ? 'cyan' : 'purple'}>
                  <div
                    className={`relative rounded-2xl p-6 sm:p-8 bg-[#0f111f]/85 border transition-all duration-300 shadow-xl holo-sheen ${
                      isPresent
                        ? 'border-cyan-500/40 shadow-cyan-500/10'
                        : 'border-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    {/* Status Indicator */}
                    {isPresent && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4 border border-cyan-500/30 font-mono">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Active Focus • Currently Pursuing</span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                            {edu.institution}
                          </h3>
                        </div>

                        <div className="mt-2 text-base font-semibold text-purple-400 flex flex-wrap items-center gap-2">
                          <Award className="w-4 h-4 shrink-0 text-cyan-400" />
                          <span>{edu.degree}</span>
                          {edu.grade && (
                            <span className="ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10">
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location Metadata */}
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 shrink-0 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-pink-400" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Tags */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1 font-mono">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Highlights:
                      </span>
                      {edu.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
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
