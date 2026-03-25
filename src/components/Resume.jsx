import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
    { year: '2022-26', title: 'Electronics and Communication Engineering', org: 'RVS College Of Engineering, Dindigul', description: 'Graduated with a focus on web technologies, data structures, and ECE core knowledge.', type: 'education' },
    { year: '2026', title: 'Full Stack Development', org: 'CodeAlpha', description: 'Completed CodeAlpha Full Stack Development Internship, working on practical development tasks and improving skills in building and managing web applications.', type: 'internship' },
    { year: '2026', title: 'AI Fluency : Framework & Foundations', org: 'ANTHROPIC', description: 'Completed Anthropic AI Certification, gaining practical skills in prompt engineering, AI-assisted workflows, and responsible use of large language models in development and data tasks.', type: 'certification' },
    { year: '2025', title: 'Power BI', org: 'LOGICPIES', description: 'Completed Power BI Course demonstrating skills in data analysis, visualization, and building insightful business intelligence dashboards using Microsoft Power BI.', type: 'certification' },
];

export default function Resume() {
    const headerRef = useScrollReveal();
    const timelineRef = useScrollReveal({ staggerDelay: 150 });

    return (
        <section
            id="resume"
            className="resume-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
                    <p className="section-label">My Journey</p>
                    <h2 className="section-title">Education & Certifications</h2>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 24 }}>
                        Download Full Resume (PDF) ↓
                    </a>
                </div>

                {/* Grid Layout (Replaces old timeline) */}
                <div ref={timelineRef} className="reveal resume-grid">
                    {timeline.map((item, i) => (
                        <div key={i} className="reveal-stagger resume-card group">
                            <div className="resume-card-glow" />
                            <div className="resume-card-content">
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                                    <span style={{
                                        fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                                        padding: '6px 14px', borderRadius: 9999, background: 'var(--accent-faded)', color: 'var(--accent)',
                                    }}>
                                        {item.year}
                                    </span>
                                    <span style={{
                                        fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                                        padding: '6px 12px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.1)',
                                        background: item.type === 'education' ? 'rgba(99,102,241,0.1)'
                                            : item.type === 'internship' ? 'rgba(249,115,22,0.1)'
                                                : 'rgba(16,185,129,0.1)',
                                        color: item.type === 'education' ? '#818CF8'
                                            : item.type === 'internship' ? '#FB923C'
                                                : '#34D399',
                                    }}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 16 }}>
                                    {item.org}
                                </p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .resume-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .resume-card {
                    position: relative;
                    padding: 32px;
                    border-radius: 20px;
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                }
                .resume-card-content {
                    position: relative;
                    z-index: 2;
                }
                .resume-card-glow {
                    position: absolute;
                    top: -50%; left: -50%; width: 200%; height: 200%;
                    background: radial-gradient(circle at center, var(--accent-faded) 0%, transparent 50%);
                    opacity: 0;
                    transform: scale(0.5);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                    z-index: 1;
                }
                .resume-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.15);
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px var(--accent-faded);
                }
                .resume-card:hover .resume-card-glow {
                    opacity: 1;
                    transform: scale(1);
                }
                @media (max-width: 767px) {
                    .resume-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .resume-grid { grid-template-columns: 1fr !important; gap: 20px; }
                    .resume-card { padding: 24px !important; }
                }
            `}</style>
        </section>
    );
}
