import { X, ExternalLink, Github, CheckCircle2, Lightbulb, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#13141f] rounded-2xl border border-black/10 dark:border-white/15 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#13141f]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
              Project {project.num}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-purple-600 dark:text-purple-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Project Visual Image */}
          <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              {project.status}
            </div>
          </div>

          {/* Key Idea Callout Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 border border-purple-500/25 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/30">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-purple-600 dark:text-purple-400">
                Key Idea & Core Mission
              </div>
              <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                "{project.keyIdea}"
              </p>
            </div>
          </div>

          {/* Full Narrative Description */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
              Context & Implementation
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-500" /> Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-10 px-6 py-4 bg-slate-50 dark:bg-[#11121a] border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
