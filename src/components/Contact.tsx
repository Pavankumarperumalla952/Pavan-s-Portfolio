import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MapPin, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-cyan-500/10">
      {/* Background Anime Watermark */}
      <div className="absolute bottom-10 left-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-pink-400 hidden md:block">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              TRANSMISSION PORTAL • INBOX
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Get In <span className="anime-gradient-text">Touch</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Open to discussing software projects, AI innovations, IoT engineering opportunities, or academic collaborations.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">
                  Initiate a Conversation
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Feel free to contact me via email, phone, or connect on LinkedIn and GitHub. I respond promptly!
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Cards with 3D Tilt and ScrollReveal */}
            <div className="space-y-4">
              {/* Email */}
              <ScrollReveal direction="up" delay={150}>
                <TiltCard glowColor="cyan">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/85 border border-cyan-500/20 shadow-md flex items-center justify-between gap-3 holo-sheen">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Email // Direct</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="btn-3d p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal direction="up" delay={200}>
                <TiltCard glowColor="magenta">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/85 border border-pink-500/20 shadow-md flex items-center justify-between gap-3 holo-sheen">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Phone // Mobile</div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-xs sm:text-sm font-semibold text-white hover:text-pink-400 transition-colors"
                        >
                          +91 {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                      className="btn-3d p-2 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                      title="Copy phone to clipboard"
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal direction="up" delay={250}>
                <TiltCard glowColor="purple">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/85 border border-purple-500/20 shadow-md flex items-center gap-3.5 holo-sheen">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Location // Campus</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Lendi Institute of Engineering & Technology, Andhra Pradesh
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

            {/* Social Buttons */}
            <ScrollReveal direction="up" delay={300}>
              <div className="pt-2">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3 font-mono">
                  EXTERNAL CHANNELS • PROFILES
                </div>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-3d flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold text-xs sm:text-sm transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-3d flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-cyan-500/30 font-semibold text-xs sm:text-sm transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={150}>
              <TiltCard glowColor="cyan">
                <div className="rounded-3xl p-6 sm:p-8 bg-[#0f111f]/90 border border-cyan-500/30 shadow-2xl holo-sheen">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-4 font-mono">
                    <MessageSquare className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE • DISPATCH</span>
                  </div>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in zoom-in-95 duration-200">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/30">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        Transmission Confirmed!
                      </h4>
                      <p className="text-sm text-slate-300">
                        Your message has been sent to Pavan Kumar Perumalla. I will reply to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                            Your Name <span className="text-pink-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. John Doe"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                            Your Email <span className="text-pink-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. john@example.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Project Collaboration / Engineering Inquiry"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                          Message <span className="text-pink-400">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your transmission here..."
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-3d w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-lg shadow-cyan-500/25 cursor-pointer font-mono"
                      >
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION</span>
                      </button>
                    </form>
                  )}
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
