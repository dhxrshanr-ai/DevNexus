import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleScroll = (e, target) => {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="hero-section"
            style={{
                background: 'transparent',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '80px 0',
            }}
        >

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                {/* Label */}
                <p
                    className={loaded ? '' : 'hero-hidden'}
                    style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        marginBottom: 24,
                        transition: 'all 0.7s ease',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    Web Developer
                </p>

                {/* Name */}
                <h1
                    className={loaded ? 'hero-revealed' : 'hero-hidden'}
                    style={{
                        fontSize: 'clamp(3.5rem, 12vw, 7rem)', 
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                        marginBottom: 32,
                        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(40px)',
                        background: 'linear-gradient(to bottom, #fff 20%, var(--accent) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 20px var(--accent-faded))',
                    }}
                >
                    Dharshan
                </h1>

                {/* Description and Socials */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 20,
                        marginBottom: 40,
                        transition: 'all 0.7s ease 0.3s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <p
                        style={{
                            fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            maxWidth: 540,
                            margin: 0,
                            marginBottom: 8,
                        }}
                    >
                        Passionate about building fast, modern web experiences.
                    </p>
                    <div style={{ display: 'flex', gap: 24, padding: '4px 0' }}>
                        <a href="https://github.com/dhxrshanr-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-secondary)', fontSize: '1.75rem', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/dharshanr6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)', fontSize: '1.75rem', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                            <FiLinkedin />
                        </a>
                    </div>
                </div>

                {/* CTAs */}
                <div
                    className="hero-ctas"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 20,
                        justifyContent: 'center',
                        transition: 'all 0.7s ease 0.45s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="btn btn-primary hero-btn">
                        View My Work ↓
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn">
                        Download CV
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="hero-scroll-indicator"
                    style={{
                        marginTop: 60,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                        transition: 'all 0.7s ease 0.7s',
                        opacity: loaded ? 1 : 0,
                    }}
                >
                    <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Scroll to explore
                    </span>
                    <div style={{ width: 20, height: 32, borderRadius: 9999, border: '2px solid var(--text-secondary)', display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
                        <div className="animate-bounce" style={{ width: 4, height: 8, borderRadius: 9999, background: 'var(--accent)' }} />
                    </div>
                </div>
            </div>

             <style>{`
                @keyframes shine {
                    to { background-position: 200% center; }
                }
                @media (max-width: 767px) {
                    .hero-section { padding: 40px 0 !important; }
                    .hero-ctas { flex-direction: column !important; gap: 12px !important; align-items: center !important; }
                    .hero-btn { width: 100% !important; max-width: 280px !important; }
                    .hero-scroll-indicator { margin-top: 32px !important; }
                    h1 { 
                        font-family: Outfit, sans-serif !important;
                        font-size: 3.25rem !important; 
                        letter-spacing: -0.03em !important; 
                        filter: drop-shadow(0 0 12px var(--accent-faded)) !important; /* Smaller shadow on mobile */
                    }
                }
            `}</style>
        </section>
    );
}
