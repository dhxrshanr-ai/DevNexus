import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { value: 'Fresher', label: 'Graduate' },
    { value: '5+', label: 'Projects Built' },
    { value: '3+', label: 'Certifications' },
    { value: '8+', label: 'Technologies' },
];

function CountUp({ target, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const num = parseInt(target);
                    if (isNaN(num)) { setCount(target); return; }
                    let start = 0;
                    const step = Math.max(1, Math.floor(num / (duration / 16)));
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= num) { setCount(num); clearInterval(timer); }
                        else setCount(start);
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{typeof count === 'string' ? count : `${count}${suffix}`}</span>;
}

export default function About() {
    const headerRef = useScrollReveal();
    const textRef = useScrollReveal();
    const statsRef = useScrollReveal({ staggerDelay: 120 });

    return (
        <section
            id="about"
            className="about-section"
            style={{ background: 'var(--bg-primary)', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
                    <p className="section-label">Get to know me</p>
                    <h2 className="section-title">About Me</h2>
                </div>

                {/* Text */}
                <div ref={textRef} className="reveal" style={{ maxWidth: 650, margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)', lineHeight: 1.8, marginBottom: 24 }}>
                        I'm <strong style={{ color: 'var(--text-primary)' }}>Dharshan</strong>, a
                        motivated fresher frontend developer from{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>Theni, India</strong>.
                        I specialize in React, JavaScript, and modern CSS — transforming complex
                        problems into clean, intuitive interfaces.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)', lineHeight: 1.8 }}>
                        Fresh out of college and hungry to build, I bring energy, a strong
                        foundation, and a passion for creating exceptional user experiences. I
                        believe great design is invisible — it just works.
                    </p>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="reveal" style={{ marginTop: 60 }}>
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="reveal-stagger about-stat-card"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>
                                    {stat.value.includes('+') ? <CountUp target={stat.value.replace('+', '')} suffix="+" /> : stat.value}
                                </p>
                                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .about-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .about-stat-card {
                    text-align: center;
                    padding: 32px;
                    border-radius: 12px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    transition: all 0.3s ease;
                }
                @media (max-width: 767px) {
                    .about-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
                    .about-stat-card { padding: 20px !important; }
                }
            `}</style>
        </section>
    );
}
