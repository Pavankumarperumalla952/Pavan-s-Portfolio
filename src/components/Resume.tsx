import { useState } from 'react';
import { Download, ExternalLink, Eye, FileText, CheckCircle2, X, Sparkles, GraduationCap, Code2, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background Anime Watermark */}
      <div className="absolute top-10 right-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-cyan-400 hidden md:block">
        CREDENTIALS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              OFFICIAL DOSSIER • CURRICULUM VITAE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              My <span className="anime-gradient-text">Resume</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Download or view the official resume detailing my academic credentials, engineering projects, and technical skills.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Action Buttons Top Bar */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Pavan_Kumar_Perumalla_Resume.pdf"
              className="btn-3d inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 rounded-xl shadow-xl shadow-cyan-500/25 font-mono cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="btn-3d inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0f111f]/90 border border-cyan-500/30 hover:border-cyan-400 rounded-xl shadow-sm cursor-pointer font-mono"
            >
              <Eye className="w-5 h-5 text-cyan-400" />
              <span>Preview in Browser</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-3d inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-400 hover:text-cyan-400 bg-transparent border border-white/10 rounded-xl transition-colors font-mono"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        {/* 3D Profile Summary Card (Matching New Resume Content) */}
        <ScrollReveal direction="up" delay={150}>
          <TiltCard glowColor="purple" className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-6 sm:p-10 bg-[#0f111f]/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl relative overflow-hidden holo-sheen">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/15 to-transparent pointer-events-none rounded-bl-full" />

              {/* Identity Header */}
              <div className="text-center pb-8 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/30 font-mono">
                  <FileText className="w-3.5 h-3.5" /> VERIFIED DOSSIER • OFFICIAL RESUME
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.phone}
                  </span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-pink-400" /> {PERSONAL_INFO.email}
                  </span>
                  <span className="hidden sm:inline">&bull;</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <span className="hidden sm:inline">&bull;</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-purple-400 hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>

                {/* Professional Summary Callout */}
                <div className="mt-5 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5 font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Professional Summary
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    ECE undergraduate with hands-on experience building software, AI, Android, and IoT projects. Experienced with Python, Java, TypeScript, web development, Firebase, and microcontroller-based systems, with a growing focus on software and AI development. Passionate about building practical, user-focused solutions and continuously learning modern technologies.
                  </p>
                </div>
              </div>

              {/* Quick Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {/* Education Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" /> Education
                    </div>
                    
                    <div className="space-y-3 mt-3">
                      <div>
                        <div className="text-xs font-bold text-white flex justify-between">
                          <span>Dr. DVMM High School</span>
                          <span className="text-slate-400 font-normal">Parvathipuram</span>
                        </div>
                        <div className="text-xs text-cyan-300 font-mono">10th — 83%</div>
                      </div>

                      <div className="border-t border-white/5 pt-2">
                        <div className="text-xs font-bold text-white flex justify-between">
                          <span>Sri Chaitanya Jr College</span>
                          <span className="text-slate-400 font-normal">Visakhapatnam</span>
                        </div>
                        <div className="text-xs text-cyan-300 font-mono">Intermediate — 75%</div>
                      </div>

                      <div className="border-t border-white/5 pt-2">
                        <div className="text-xs font-bold text-white flex justify-between">
                          <span>Lendi Inst. of Eng. Tech.</span>
                          <span className="text-amber-400 font-mono text-[11px]">Present</span>
                        </div>
                        <div className="text-[11px] text-slate-300">B.Tech — ECE</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Projects Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2 font-mono flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" /> Projects (01 - 04)
                  </div>
                  <ul className="text-xs space-y-2 mt-3 text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">01 — DaFoFe:</strong> Daily Food Feedback (Web)
                      </div>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">02 — Aaradhya AI:</strong> Assistant (AI / Android)
                      </div>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">03 — Solar Water:</strong> Purification & Monitoring
                      </div>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">04 — Smart Attendance:</strong> RFID / IoT System
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Skills Snapshot Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 font-mono">
                    Skills Matrix
                  </div>
                  <div className="mt-2 space-y-2.5">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono mb-1">
                        Programming & Web
                      </div>
                      <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                        {['Python', 'TypeScript', 'Java', 'C', 'HTML Web Dev'].map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono mb-1">
                        Other Technical Interests
                      </div>
                      <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                        {['AI Integration', 'Android Dev', 'Firebase', 'IoT', 'Arduino'].map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>

      {/* PDF Modal Viewer for New Resume */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-5xl h-[92vh] bg-[#0c0d18] rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#121324]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm sm:text-base text-white font-mono">
                  Pavan Kumar Perumalla — Official Resume PDF
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Pavan_Kumar_Perumalla_Resume.pdf"
                  className="btn-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg transition-colors font-mono cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF */}
            <div className="flex-1 bg-black/60 p-2">
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=1&navpanes=0`}
                title="Pavan Kumar Perumalla Resume PDF"
                className="w-full h-full rounded-xl border border-cyan-500/20 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
