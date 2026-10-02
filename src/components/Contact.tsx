import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MapPin, MessageSquare, Sparkles } from 'lucide-react';
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
      {/* Background Anime Watermark & Ambient Orbs */}
      <div className="absolute bottom-10 left-10 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-pink-400 hidden md:block">
        CONNECT
      </div>
      <div className="absolute top-1/4 -right-28 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-float-reverse" />

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
              <ScrollReveal direction="left" delay={150}>
                <TiltCard glowColor="cyan">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/90 border border-cyan-500/25 shadow-xl flex items-center justify-between gap-3 holo-sheen preserve-3d">
                    <div className="flex items-center gap-3.5 min-w-0" style={{ transform: 'translateZ(15px)' }}>
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30 shadow-md">
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
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal direction="left" delay={200}>
                <TiltCard glowColor="magenta">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/90 border border-pink-500/25 shadow-xl flex items-center justify-between gap-3 holo-sheen preserve-3d">
                    <div className="flex items-center gap-3.5 min-w-0" style={{ transform: 'translateZ(15px)' }}>
                      <div className="w-11 h-11 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30 shadow-md">
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
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal direction="left" delay={250}>
                <TiltCard glowColor="purple">
                  <div className="p-4 rounded-2xl bg-[#0f111f]/90 border border-purple-500/25 shadow-xl flex items-center gap-3.5 holo-sheen preserve-3d">
                    <div
                      className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30 shadow-md"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div style={{ transform: 'translateZ(12px)' }}>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Location // Campus</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Lendi Institute, Vizianagaram, AP, India
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

            {/* Social Networks Link Matrix */}
            <ScrollReveal direction="up" delay={300}>
              <div className="p-5 rounded-2xl bg-[#0f111f]/90 border border-cyan-500/20 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                  Professional Networks
                </div>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-3d flex-1 py-3 px-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center gap-2 text-xs font-mono font-semibold transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-3d flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center gap-2 text-xs font-mono font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={150}>
              <TiltCard glowColor="purple">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0f111f]/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden preserve-3d">
                  <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10" style={{ transform: 'translateZ(14px)' }}>
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold font-display text-white">Send Direct Message</h3>
                  </div>

                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                      <p className="text-sm text-slate-400 max-w-sm mx-auto">
                        Thank you for reaching out. Your transmission has been queued and I will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Alex Developer"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@domain.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project Inquiry / Collaboration / Opportunity"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project, idea, or how we can collaborate..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-3d w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer font-mono"
                        style={{ transform: 'translateZ(16px)' }}
                      >
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-4 h-4" />
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
