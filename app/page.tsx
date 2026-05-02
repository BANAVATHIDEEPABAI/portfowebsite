'use client';

import { portfolioData } from './data';
import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ArrowDown, Download } from 'lucide-react';

export default function Page() {
    const d = portfolioData;
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hero parallax on scroll
        const handleScroll = () => {
            if (!heroRef.current || !heroTextRef.current) return;
            const scrollY = window.scrollY;
            heroTextRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
            heroTextRef.current.style.opacity = String(1 - scrollY / 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Intersection Observer for reveal animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.15 }
        );
        document.querySelectorAll('.reveal-up, .skill-item, .exp-entry, .contact-inner').forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="text-[#fefefe]" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#06040f', minHeight: '100vh' }} suppressHydrationWarning>
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&display=swap');

                .syne { font-family: 'Syne', sans-serif; }

                body { background: #06040f; }

                /* Animated mesh background */
                .bg-mesh {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 80vw 60vh at 20% 20%, rgba(120,40,255,0.25) 0%, transparent 60%),
                        radial-gradient(ellipse 60vw 50vh at 80% 10%, rgba(0,200,255,0.15) 0%, transparent 55%),
                        radial-gradient(ellipse 70vw 60vh at 70% 80%, rgba(255,60,180,0.18) 0%, transparent 60%),
                        radial-gradient(ellipse 50vw 40vh at 10% 80%, rgba(0,255,180,0.12) 0%, transparent 55%),
                        #06040f;
                    animation: meshMove 12s ease-in-out infinite alternate;
                }

                @keyframes meshMove {
                    0%   { filter: hue-rotate(0deg) brightness(1); }
                    50%  { filter: hue-rotate(20deg) brightness(1.08); }
                    100% { filter: hue-rotate(-15deg) brightness(1.04); }
                }

                /* Glowing orbs */
                .orb {
                    position: fixed;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 0;
                    animation: orbFloat 10s ease-in-out infinite alternate;
                }
                .orb-1 { width: 500px; height: 500px; top: -100px; left: -100px; background: rgba(120,40,255,0.3); animation-duration: 11s; }
                .orb-2 { width: 400px; height: 400px; top: 30%; right: -80px; background: rgba(0,200,255,0.2); animation-duration: 14s; animation-delay: -4s; }
                .orb-3 { width: 350px; height: 350px; bottom: 10%; left: 30%; background: rgba(255,60,180,0.2); animation-duration: 9s; animation-delay: -2s; }

                @keyframes orbFloat {
                    0%   { transform: translateY(0px) scale(1); }
                    100% { transform: translateY(-60px) scale(1.1); }
                }

                /* Grid overlay */
                .grid-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
                }

                .cinematic-gradient {
                    background: linear-gradient(180deg, rgba(6,4,15,0) 0%, rgba(6,4,15,1) 100%);
                }

                .text-glow {
                    text-shadow: 0 0 80px rgba(180,100,255,0.6), 0 0 30px rgba(0,200,255,0.3);
                }

                .section-heading {
                    display: inline-block;
                    position: relative;
                    font-size: 2.5rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    background: linear-gradient(90deg, #fff 0%, #a855f7 50%, #06b6d4 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 0.5rem;
                }

                .section-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 16px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    background: rgba(168,85,247,0.1);
                    border: 1px solid rgba(168,85,247,0.3);
                    color: #a855f7;
                    margin-bottom: 1rem;
                }

                .section-badge::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #a855f7;
                    box-shadow: 0 0 8px #a855f7;
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.7); }
                }

                .section-divider {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.5), transparent);
                    margin: 1.5rem 0 3rem 0;
                }

                .highlight-card {
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .highlight-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(135deg, rgba(168,85,247,0.5), rgba(6,182,212,0.3), transparent 60%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }

                .highlight-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 60px rgba(120,40,255,0.25), 0 0 0 1px rgba(168,85,247,0.2);
                }

                .exp-card {
                    position: relative;
                    padding: 2rem;
                    border-radius: 1rem;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.06);
                    transition: all 0.3s ease;
                }

                .exp-card::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    border-radius: 3px 0 0 3px;
                    background: linear-gradient(180deg, #a855f7, #06b6d4);
                }

                .exp-card:hover {
                    background: rgba(168,85,247,0.05);
                    border-color: rgba(168,85,247,0.2);
                    transform: translateX(6px);
                }

                .film-grain {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 100;
                    opacity: 0.04;
                    mix-blend-mode: overlay;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.7'/%3E%3C/svg%3E");
                    background-size: 150px;
                }
            `}} />

            {/* Background Effects */}
            <div className="bg-mesh" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="grid-overlay" />
            <div className="film-grain" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-5" style={{ background: 'rgba(6,4,15,0.6)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ background: 'linear-gradient(90deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{d.name?.split(' ')[0] || 'Portfolio'}</span>
                    <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase font-medium">
                        {['Technologies', 'Projects', 'Experience', 'Contact'].map(item => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-white transition-colors duration-300">{item}</a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ===== HERO ===== */}
            <section ref={heroRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden z-10">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(120,40,255,0.12) 0%, transparent 70%)' }} />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden mix-blend-screen">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-[2px] h-[2px] rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                background: i % 3 === 0 ? 'rgba(139,92,246,0.6)' : i % 3 === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(16,185,129,0.5)',
                                animation: `float-particle ${8 + Math.random() * 12}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                                filter: 'blur(0.5px)',
                            }}
                        />
                    ))}
                </div>

                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes float-particle {
                        0% { transform: translateY(0) translateX(0); opacity: 0; }
                        20% { opacity: 1; }
                        80% { opacity: 1; }
                        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
                    }
                `}} />

                <div ref={heroTextRef} className="relative z-10 text-center px-6 max-w-6xl w-full">
                    <div className="overflow-hidden mb-8">
                        <p className="text-[10px] md:text-xs tracking-[0.6em] uppercase font-medium syne" style={{ background: 'linear-gradient(90deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{d.role}</p>
                    </div>
                    <h1 className="text-glow" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                    }}>
                        {d.name}
                    </h1>
                    <p className="mt-8 text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        {d.bio}
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
                        <a href="#technologies" className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-300">
                            <span>Explore</span>
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download="resume.pdf"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg, #7828ff, #06b6d4)', boxShadow: '0 0 30px rgba(120,40,255,0.4)' }}
                        >
                            <Download className="w-4 h-4" />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-40 cinematic-gradient" />
            </section>

            {/* ===== TECHNOLOGIES ===== */}
            <section id="technologies" className="relative py-32 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="reveal-up mb-12">
                        <h2 className="section-heading">Technologies</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="reveal-up grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Array.from(new Set(d.projects.flatMap(p => p.technologies))).map((tech, i) => (
                            <div
                                key={tech}
                                className="highlight-card group flex items-center gap-4 p-5 rounded-xl"
                                style={{ background: 'rgba(255,255,255,0.03)' }}
                            >
                                <span className="text-xs font-mono w-6" style={{ background: 'linear-gradient(90deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-sm md:text-base font-medium text-white/70 group-hover:text-white transition-colors duration-300">{tech}</span>
                                <div className="ml-auto w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg,#a855f7,#06b6d4)' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS / WORK ===== */}
            <section id="projects" className="relative py-32 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="reveal-up mb-12">
                        <h2 className="section-heading">Projects</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {d.projects.map((project, i) => (
                            <div
                                key={i}
                                className={`reveal-up highlight-card rounded-2xl p-8 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                                style={{
                                    background: [
                                        'linear-gradient(135deg, rgba(120,40,255,0.12) 0%, rgba(6,182,212,0.06) 100%)',
                                        'linear-gradient(135deg, rgba(255,60,180,0.1) 0%, rgba(120,40,255,0.08) 100%)',
                                        'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(0,255,180,0.06) 100%)',
                                        'linear-gradient(135deg, rgba(255,160,0,0.08) 0%, rgba(255,60,180,0.08) 100%)',
                                    ][i % 4],
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies?.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase rounded-full text-white/60" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-500">{project.name}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERIENCE ===== */}
            <section id="experience" className="relative py-32 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="reveal-up mb-12">
                        <h2 className="section-heading">Experience</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="space-y-6">
                        {d.experience.map((exp, i) => (
                            <div key={i} className="exp-entry exp-card">
                                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.position}</h3>
                                        <p className="text-white/50">{exp.company}</p>
                                    </div>
                                    <span className="text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#a855f7' }}>
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-white/50 leading-relaxed mb-5">{exp.description}</p>
                                {exp.highlights && exp.highlights.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.highlights.map((h, j) => (
                                            <span key={j} className="text-xs text-white/50 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)' }}>
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EDUCATION ===== */}
            <section className="relative py-32 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="reveal-up mb-12">
                        <h2 className="section-heading">Education</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {d.education.map((edu, i) => (
                            <div key={i} className="highlight-card rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <h3 className="text-lg font-bold mb-1">{edu.degree} in {edu.field}</h3>
                                <p className="text-white/50 mb-3">{edu.school}</p>
                                <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06b6d4' }}>{edu.startDate} — {edu.endDate}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact" className="relative py-40 px-6 z-10">
                <div className="contact-inner max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.5em] uppercase text-white/30 mb-8">Get in Touch</p>
                    <h2 className="text-glow mb-8" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: 400,
                        lineHeight: 1.1,
                    }}>
                        Let&apos;s create<br />something cinematic
                    </h2>
                    <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">
                        Ready to bring your vision to life? Let&apos;s talk.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="/resume.pdf"
                            download="Banavathi_Deepa_Bai_Resume.pdf"
                            className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg,#7828ff,#06b6d4)', boxShadow: '0 0 30px rgba(120,40,255,0.4)' }}
                        >
                            <Download className="w-5 h-5" />
                            <span className="text-sm tracking-[0.1em] uppercase font-medium">Download Resume</span>
                        </a>
                        <a href={`mailto:${d.email}`} className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                            <Mail className="w-5 h-5" />
                            <span className="text-sm tracking-[0.1em] uppercase font-medium">Email</span>
                        </a>
                        {d.links.github && (
                            <a href={d.links.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                                <Github className="w-5 h-5" />
                                <span className="text-sm tracking-[0.1em] uppercase font-medium">GitHub</span>
                            </a>
                        )}
                        {d.links.linkedin && (
                            <a href={d.links.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                                <Linkedin className="w-5 h-5" />
                                <span className="text-sm tracking-[0.1em] uppercase font-medium">LinkedIn</span>
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 px-6" style={{ background: 'rgba(6,4,15,0.8)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-xs text-white/30 tracking-widest uppercase">
                    <span>© {new Date().getFullYear()} {d.name}. All Rights Reserved.</span>
                    <span>Designed &amp; Built by {d.name.split(' ')[0]}</span>
                </div>
            </footer>
        </div>
    );

}
