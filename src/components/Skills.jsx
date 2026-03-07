import { skills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 80 });

    return (
        <section
            id="skills"
            className="skills-section"
            style={{ background: 'var(--bg-card)', paddingTop: 120, paddingBottom: 80 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p className="section-label">What I work with</p>
                    <h2 className="section-title">My Tech Stack</h2>
                    <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
                        Technologies I use to bring ideas to life
                    </p>
                </div>

                {/* Grid */}
                <div ref={gridRef} className="reveal">
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="reveal-stagger skills-card"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <span className="skills-icon" role="img" aria-label={skill.name}>
                                    {skill.icon}
                                </span>
                                <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', textAlign: 'center' }}>
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 16px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .skills-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 24px;
                    border-radius: 12px;
                    background: var(--bg-primary);
                    border: 1px solid var(--border);
                    cursor: default;
                    transition: all 0.3s ease;
                }
                .skills-icon { font-size: 2.25rem; display: flex; justify-content: center; align-items: center; line-height: 1; }
                .skills-icon img, .skills-icon svg { width: 1em; height: 1em; object-fit: contain; }
                @media (max-width: 767px) {
                    .skills-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .skills-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 12px !important; }
                    .skills-card { padding: 16px !important; }
                    .skills-icon { font-size: 1.75rem !important; }
                }
                @media (max-width: 479px) {
                    .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
}
