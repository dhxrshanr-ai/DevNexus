import { useEffect, useState } from 'react';

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
                background: 'var(--bg-primary)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '80px 0',
            }}
        >
            {/* Ambient Glow */}
            <div
                style={{
                    position: 'absolute', top: '25%', left: -128,
                    width: 384, height: 384, borderRadius: '50%',
                    opacity: 0.2, filter: 'blur(120px)',
                    background: 'var(--accent)', pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute', bottom: '25%', right: -128,
                    width: 320, height: 320, borderRadius: '50%',
                    opacity: 0.1, filter: 'blur(100px)',
                    background: 'var(--accent)', pointerEvents: 'none',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                {/* Label */}
                <p
                    className={`section-label ${loaded ? '' : 'hero-hidden'}`}
                    style={{
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
                    style={{
                        fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        letterSpacing: '-1px',
                        color: 'var(--text-primary)',
                        marginBottom: 32,
                        transition: 'all 0.7s ease 0.15s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    Dharshan
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        maxWidth: 540,
                        margin: '0 auto 40px',
                        transition: 'all 0.7s ease 0.3s',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    Passionate about building fast, modern web experiences.
                </p>

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
                @media (max-width: 767px) {
                    .hero-section { padding: 60px 0 !important; }
                    .hero-ctas { flex-direction: column !important; gap: 12px !important; align-items: center !important; }
                    .hero-btn { width: 100% !important; max-width: 280px !important; }
                    .hero-scroll-indicator { margin-top: 40px !important; }
                }
            `}</style>
        </section>
    );
}
