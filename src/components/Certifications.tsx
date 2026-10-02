import { useState } from 'react';
import { Award, Eye, X, Download, ShieldCheck, Calendar, Maximize2 } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const getGlow = (index: number): 'cyan' | 'magenta' | 'purple' => {
    if (index % 3 === 0) return 'cyan';
    if (index % 3 === 1) return 'purple';
    return 'magenta';
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-cyan-500/10">
      {/* Background Anime Watermark & 3D Ambient Orbs */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-cyan-400 hidden md:block">
        CERTIFIED
      </div>
      <div className="absolute top-1/4 -right-28 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              VERIFIED CREDENTIALS • RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              My <span className="anime-gradient-text">Certifications</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Verified certifications in Internet of Things, Artificial Intelligence, and Data Analytics awarded by NPTEL (IIT Kharagpur) and Cisco Networking Academy.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Certifications 2x2 Grid with 3D Tilt and Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, index) => {
            return (
              <ScrollReveal key={cert.id} direction="up" delay={index * 120}>
                <TiltCard glowColor={getGlow(index)}>
                  <div className="group rounded-2xl bg-[#0f111f]/90 border border-cyan-500/25 overflow-hidden shadow-2xl hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full holo-sheen preserve-3d">
                    {/* Certificate Image Frame (Maintaining 100% Complete Original Aspect Ratio) */}
                    <div
                      className="relative p-3 bg-black/40 cursor-pointer overflow-hidden group/img"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto object-contain block transition-transform duration-300 group-hover/img:scale-[1.015]"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== cert.fallbackImage) {
                              target.src = cert.fallbackImage;
                            }
                          }}
                        />

                        {/* Interactive Click to Enlarge Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white">
                          <div className="px-4 py-2 rounded-xl bg-black/80 border border-cyan-400/60 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
                            <Maximize2 className="w-4 h-4 text-cyan-400" />
                            <span>CLICK TO ENLARGE</span>
                          </div>
                        </div>
                      </div>

                      {/* Top Floating Badge */}
                      <div
                        className="absolute top-5 left-5 flex items-center gap-2"
                        style={{ transform: 'translateZ(18px)' }}
                      >
                        <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold bg-black/85 backdrop-blur-md text-cyan-400 border border-cyan-500/40 shadow-lg flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                          <span>0{index + 1} // VERIFIED</span>
                        </span>
                        {cert.score && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-md">
                            {cert.score}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Certificate Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(12px)' }}>
                      <div>
                        {/* Title and Issuer */}
                        <div className="mb-3">
                          <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-purple-400 mt-1 font-mono">
                            {cert.issuer}
                          </p>
                        </div>

                        {/* Date & Metadata */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-pink-400" />
                          <span>{cert.date}</span>
                        </div>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="btn-3d inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                        >
                          <Eye className="w-4 h-4 text-cyan-400" />
                          <span>Inspect Full Certificate</span>
                        </button>

                        <a
                          href={cert.image}
                          download={`${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
                          className="btn-3d p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                          title="Download Certificate Image"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Certificate Modal Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d18] rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#121324]">
              <div className="flex items-center gap-2.5 min-w-0">
                <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-white truncate font-display">
                    {selectedCert.title}
                  </h4>
                  <p className="text-[11px] text-cyan-300 font-mono truncate">
                    {selectedCert.issuer} &bull; {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedCert.image}
                  download={`${selectedCert.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
                  className="btn-3d inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg transition-colors font-mono cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewer (100% Original Aspect Ratio, Fully Visible) */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== selectedCert.fallbackImage) {
                    target.src = selectedCert.fallbackImage;
                  }
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-[#121324] border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-cyan-400">100% ORIGINAL VERIFIED CREDENTIAL</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Close Preview [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
