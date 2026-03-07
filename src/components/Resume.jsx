import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
    { year: '2022-26', title: 'Electronics and Communication Engineering', org: 'RVS College Of Engineering, Dindigul', description: 'Graduated with a focus on web technologies, data structures, and ECE core knowledge.', type: 'education' },
    { year: '2026', title: 'AI Fluency : Framework & Foundations', org: 'ANTHROPIC', description: 'Completed Anthropic AI Certification, gaining practical skills in prompt engineering, AI-assisted workflows, and responsible use of large language models in development and data tasks.', type: 'certification' },
    { year: '2026', title: 'Full Stack Development', org: 'CodeAlpha', description: 'Completed CodeAlpha Full Stack Development Internship, working on practical development tasks and improving skills in building and managing web applications.', type: 'certification' },
    { year: '2025', title: 'Power BI', org: 'LOGICPIES', description: 'Completed Power BI Course demonstrating skills in data analysis, visualization, and building insightful business intelligence dashboards using Microsoft Power BI.', type: 'certification' },
];

export default function Resume() {
    const headerRef = useScrollReveal();
    const timelineRef = useScrollReveal({ staggerDelay: 150 });

    return (
        <section
            id="resume"
            className="resume-section"
            style={{ background: 'var(--bg-card)', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p className="section-label">My Journey</p>
                    <h2 className="section-title">Experience & Education</h2>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>
                        Download Full Resume (PDF) ↓
                    </a>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="reveal resume-timeline">
                    {/* Vertical line */}
                    <div style={{ position: 'absolute', left: 11, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                        {timeline.map((item, i) => (
                            <div key={i} className="reveal-stagger" style={{ position: 'relative', paddingLeft: 48 }}>
                                {/* Dot */}
                                <div style={{
                                    position: 'absolute', left: 0, top: 6, width: 22, height: 22,
                                    borderRadius: '50%', border: '2px solid var(--accent-cyan)', background: 'var(--bg-card)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                                </div>

                                {/* Card */}
                                <div className="resume-card card card-brackets">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                                        <span
                                            className="tag-badge"
                                            style={{
                                                fontSize: '0.6875rem',
                                                paddingInline: 16,
                                            }}
                                        >
                                            {item.year}
                                        </span>
                                        <span style={{
                                            fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                                            padding: '4px 10px', borderRadius: 9999,
                                            background: item.type === 'education' ? 'rgba(0,102,255,0.14)' : 'rgba(0,255,136,0.12)',
                                            color: item.type === 'education' ? 'var(--accent-blue)' : 'var(--accent-success)',
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-cyan)', marginBottom: 12 }}>
                                        {item.org}
                                    </p>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .resume-timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 60px auto 0;
                }
                .resume-card {
                    padding: 28px;
                    border-radius: 12px;
                    background: transparent;
                }
                .resume-download-btn {}
                @media (max-width: 767px) {
                    .resume-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .resume-timeline { max-width: 100% !important; margin-top: 40px !important; }
                    .resume-card { padding: 20px !important; }
                    .resume-download-btn { width: 100% !important; }
                }
            `}</style>
        </section>
    );
}
