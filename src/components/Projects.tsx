import { useState } from 'react';
import { Lightbulb, ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'software') {
      return proj.category.includes('Software') || proj.category.includes('Intelligence') || proj.category.includes('Android');
    }
    if (filter === 'hardware') {
      return proj.category.includes('Hardware') || proj.category.includes('IoT');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Anime Watermark & Ambient 3D Glows */}
      <div className="absolute top-10 right-8 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-cyan-400 hidden md:block">
        PROJECTS
      </div>
      <div className="absolute top-1/4 -left-28 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float" />
      <div className="absolute bottom-1/4 -right-28 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              ENGINEERING ARTIFACTS • INNOVATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Featured <span className="anime-gradient-text">Projects</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Four practical engineering endeavors across web applications, artificial intelligence, IoT, and automated hardware.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Filter Segmented Control */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex justify-center mb-14">
            <div className="inline-flex p-1.5 rounded-xl bg-[#0f111f]/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <button
                onClick={() => setFilter('all')}
                className={`btn-3d px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer font-mono ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                All Projects (4)
              </button>
              <button
                onClick={() => setFilter('software')}
                className={`btn-3d px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer font-mono ${
                  filter === 'software'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                Software & AI (2)
              </button>
              <button
                onClick={() => setFilter('hardware')}
                className={`btn-3d px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer font-mono ${
                  filter === 'hardware'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                Hardware & IoT (2)
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid with 3D Tilt and Staggered ScrollReveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={120 + idx * 100}>
              <TiltCard glowColor={idx % 2 === 0 ? 'cyan' : 'magenta'}>
                <div className="group rounded-2xl bg-[#0f111f]/85 border border-cyan-500/20 overflow-hidden shadow-xl hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full holo-sheen preserve-3d">
                  {/* Image & Category Banner */}
                  <div
                    className="relative overflow-hidden aspect-video bg-slate-900 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f111f] via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2" style={{ transform: 'translateZ(18px)' }}>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-black/75 backdrop-blur-md text-cyan-400 border border-cyan-500/30 shadow-md">
                        PROJECT // {project.num}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4" style={{ transform: 'translateZ(16px)' }}>
                      <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-1 font-mono">
                        {project.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(10px)' }}>
                    <div>
                      {/* Key Idea Callout Box */}
                      <div className="p-3.5 rounded-xl bg-cyan-950/25 border border-cyan-500/25 mb-5 flex items-start gap-2.5 shadow-inner" style={{ transform: 'translateZ(14px)' }}>
                        <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider font-bold text-cyan-400 font-mono block">
                            CORE MISSION • OBJECTIVE
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium">
                            "{project.keyIdea}"
                          </p>
                        </div>
                      </div>

                      {/* Summary Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-cyan-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 rounded-md text-[11px] font-mono text-cyan-400/80">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-3d inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                      >
                        <span>VIEW ARTIFACT</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-3d p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
