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
                    }, 24);
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
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
                    <p className="section-label">Get to know me</p>
                    <h2 className="section-title">About Me</h2>
                </div>

                {/* Text */}
                <div ref={textRef} className="reveal about-desc-container">
                    <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)', lineHeight: 1.8 }}>
                        I'm <strong style={{ color: 'var(--text-primary)' }}>Dharshan</strong>, a design-minded Full Stack Developer. 
                        As a recent graduate, I specialize in architecting fast, scalable web applications by merging modern UI ecosystems like React with emerging AI frameworks to deliver highly polished digital experiences.
                    </p>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="reveal" style={{ marginTop: 60 }}>
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="reveal-stagger about-stat-card"
                            >
                                <span className="stat-num">
                                    {stat.value.includes('+') ? <CountUp target={stat.value.replace('+', '')} suffix="+" /> : stat.value}
                                </span>
                                <span className="stat-text">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .about-desc-container {
                    max-width: 700px;
                    margin: 0 auto;
                    text-align: center;
                    margin-bottom: 60px;
                }
                .about-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .about-stat-card {
                    position: relative;
                    text-align: center;
                    padding: 40px 24px;
                    border-radius: 24px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    will-change: transform, opacity;
                }
                .about-stat-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at top right, var(--accent-faded), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }
                .about-stat-card:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: var(--accent);
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
                }
                .about-stat-card:hover::before {
                    opacity: 1;
                }
                .stat-num {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 8px;
                    display: block;
                    transition: all 0.3s ease;
                }
                .about-stat-card:hover .stat-num {
                    color: var(--accent);
                    text-shadow: 0 0 8px var(--accent-faded);
                }
                .stat-text {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: var(--text-muted);
                    transition: color 0.3s ease;
                }
                .about-stat-card:hover .stat-text {
                    color: var(--text-primary);
                }
                @media (max-width: 991px) {
                    .about-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
                }
                @media (max-width: 767px) {
                    .about-section { padding: 60px 0 !important; }
                    .about-desc-container {
                        max-width: 100%;
                        padding: 0 16px;
                        margin-bottom: 32px;
                        text-align: center;
                    }
                    .about-desc-container p {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                    }
                    .about-stat-card { padding: 24px 12px; border-radius: 16px; }
                    .stat-num { font-size: 1.5rem; margin-bottom: 4px; }
                    .stat-text { font-size: 0.65rem; }
                }
            `}</style>
        </section>
    );
}
