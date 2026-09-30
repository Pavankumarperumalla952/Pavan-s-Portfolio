import { Lightbulb, Code2, CircuitBoard, Globe2 } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Curiosity & Inquiry',
      desc: 'Driven by asking how and why things work, turning innate curiosity into working technology solutions.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      glow: 'magenta' as const
    },
    {
      icon: CircuitBoard,
      title: 'Hardware & ECE Roots',
      desc: 'Strong foundation in Electronics & Communication, microcontrollers, IoT, sensors, and circuit design.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      glow: 'cyan' as const
    },
    {
      icon: Code2,
      title: 'Software & AI Passion',
      desc: 'Extensive hands-on focus on web development, Android applications, Firebase databases, and AI models.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      glow: 'purple' as const
    },
    {
      icon: Globe2,
      title: 'Global & Modern Outlook',
      desc: 'Passionate about history, current events, and how modern digital innovations reshape human society.',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
      glow: 'magenta' as const
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-cyan-500/10">
      {/* Background Watermark */}
      <div className="absolute top-10 left-6 pointer-events-none select-none opacity-5 font-black text-8xl font-display text-cyan-400 hidden md:block">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-400 font-mono mb-2">
              PROFILE MATRIX • DISCOVERY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              About <span className="anime-gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative Prose with ScrollReveal */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <ScrollReveal direction="up" delay={100}>
              <TiltCard glowColor="cyan">
                <div className="p-6 rounded-2xl bg-[#0f111f]/85 border border-cyan-500/20 shadow-xl relative overflow-hidden holo-sheen">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-pink-500" />
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    From an early age, I have always been curious about how things work and why they work the way they do.
                    That curiosity has gradually developed into a deep interest in technology, programming, electronics,
                    and software engineering.
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p>
                I am currently pursuing my B.Tech degree at{' '}
                <strong className="text-slate-900 dark:text-white font-semibold text-cyan-300">
                  Lendi Institute of Engineering Technology
                </strong>
                . Although my formal academic background is in Electronics and Communication Engineering (ECE), I have
                developed a strong, proactive interest in the software and technology side of engineering.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p>
                I enjoy learning programming languages, exploring modern developer tooling, working with cloud platforms
                such as <strong className="text-slate-900 dark:text-white font-semibold">GitHub</strong> and{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">Firebase</strong>, and experimenting with
                AI-based conversational applications.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p>
                One thing I particularly enjoy is exploring new ideas and turning them into working projects. Rather than
                only learning concepts theoretically from textbooks, I like experimenting with them directly and
                understanding how they can be applied in real-world situations. This has encouraged me to develop diverse
                projects across software, web applications, AI, and electronics.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p>
                I am also captivated by understanding how technology is transforming our planet. I enjoy reading about
                artificial intelligence, emerging technologies, current affairs, history, and pivotal events happening
                around the world.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="pt-3 border-t border-cyan-500/20 font-medium text-purple-400">
                My ultimate goal is to keep learning, build meaningful projects, gain practical industry experience, and
                grow into a well-rounded engineer who seamlessly blends technical depth, creativity, and real-world
                problem-solving.
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Key Engineering Pillars with 3D Tilt and Staggered ScrollReveal */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={100 + index * 80}>
                  <TiltCard glowColor={item.glow}>
                    <div className="p-5 rounded-2xl bg-[#0f111f]/85 border border-cyan-500/15 shadow-sm hover:border-cyan-400/40 transition-all duration-300 flex items-start gap-4 holo-sheen">
                      <div className={`p-3 rounded-xl ${item.bg} ${item.color} shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
