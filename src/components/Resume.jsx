import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
    {
        year: '2022-26',
        title: 'Electronics and Communication Engineering',
        org: 'RVS College Of Engineering, Dindigul',
        description: 'Graduated with a focus on web technologies and ECE core knowledge.',
        type: 'education',
    },
    {
        year: '2026',
        title: 'Full Stack Development',
        org: 'CodeAlpha',
        description: 'Completed CodeAlpha Full Stack Development Internship, working on practical development tasks and improving skills in building and managing web applications.',
        type: 'internship',
    },
    {
        year: '2026',
        title: 'AI Fluency : Framework & Foundations',
        org: 'ANTHROPIC',
        description: 'Completed Anthropic AI Certification, gaining practical skills in prompt engineering, AI-assisted workflows, and responsible use of large language models in development and data tasks.',
        type: 'certification',
    },
    {
        year: '2025',
        title: 'Power BI',
        org: 'LOGICPIES',
        description: 'Completed Power BI Course demonstrating skills in data analysis, visualization, and building insightful business intelligence dashboards using Microsoft Power BI.',
        type: 'certification',
    },
];

const typeConfig = {
    education: { bg: 'rgba(99,102,241,0.12)', color: '#818CF8', border: 'rgba(99,102,241,0.3)', glow: 'rgba(99,102,241,0.25)' },
    internship: { bg: 'rgba(249,115,22,0.12)', color: '#FB923C', border: 'rgba(249,115,22,0.3)', glow: 'rgba(249,115,22,0.25)' },
    certification: { bg: 'rgba(52,211,153,0.12)', color: '#34D399', border: 'rgba(52,211,153,0.3)', glow: 'rgba(52,211,153,0.25)' },
};

export default function Resume() {
    const headerRef = useScrollReveal();
    const timelineRef = useScrollReveal({ staggerDelay: 200 });

    return (
        <section
            id="resume"
            className="resume-section"
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal resume-header">
                    <p className="section-label">My Journey</p>
                    <h2 className="section-title">Education & Certifications</h2>
                    <p className="resume-subtitle">
                        A timeline of milestones that have shaped my professional path
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary resume-download-btn"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="reveal timeline-wrapper">
                    {/* Animated center line */}
                    <div className="timeline-line" />

                    {timeline.map((item, i) => {
                        const config = typeConfig[item.type];
                        const isLeft = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className={`reveal-stagger timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                            >
                                {/* Connector dot */}
                                <div className="timeline-dot" style={{
                                    '--dot-color': config.color,
                                    '--dot-glow': config.glow,
                                }}>
                                    <div className="timeline-dot-inner" />
                                    <div className="timeline-dot-pulse" />
                                </div>

                                {/* Connector line from dot to card */}
                                <div className="timeline-connector" style={{ '--conn-color': config.border }} />

                                {/* Card */}
                                <div className="timeline-card" style={{
                                    '--card-accent': config.color,
                                    '--card-accent-bg': config.bg,
                                    '--card-accent-border': config.border,
                                    '--card-accent-glow': config.glow,
                                }}>
                                    {/* Top accent bar */}
                                    <div className="timeline-card-accent-bar" />

                                    <div className="timeline-card-body">
                                        {/* Meta row */}
                                        <div className="timeline-meta">
                                            <span className="timeline-year">{item.year}</span>
                                            <span className="timeline-type" style={{
                                                background: config.bg,
                                                color: config.color,
                                                borderColor: config.border,
                                            }}>
                                                {item.type}
                                            </span>
                                        </div>

                                        {/* Icon + Title */}
                                        <div className="timeline-title-row">
                                            {item.icon && <span className="timeline-icon">{item.icon}</span>}
                                            <h3 className="timeline-title">{item.title}</h3>
                                        </div>

                                        {/* Organization */}
                                        <p className="timeline-org">{item.org}</p>

                                        {/* Description */}
                                        <p className="timeline-desc">{item.description}</p>
                                    </div>

                                    {/* Hover glow */}
                                    <div className="timeline-card-glow" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                /* ═══════════════════ Section ═══════════════════ */
                .resume-section {
                    background: transparent;
                    padding: 120px 0;
                    position: relative;
                    overflow: hidden;
                }

                .resume-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .resume-subtitle {
                    font-size: 1.05rem;
                    color: var(--text-secondary);
                    max-width: 480px;
                    margin: 0 auto 28px;
                    line-height: 1.7;
                }

                .resume-download-btn {
                    font-size: 0.8rem !important;
                    padding: 12px 24px !important;
                }

                /* ═══════════════════ Timeline Layout ═══════════════════ */
                .timeline-wrapper {
                    position: relative;
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 20px 0;
                }

                /* Center vertical line */
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        var(--accent-faded) 10%,
                        var(--accent) 50%,
                        var(--accent-faded) 90%,
                        transparent 100%
                    );
                    transform: translateX(-50%);
                    opacity: 0.5;
                }

                .timeline-line::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    width: 6px;
                    height: 100%;
                    transform: translateX(-50%);
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        var(--accent-glow) 50%,
                        transparent 100%
                    );
                    filter: blur(4px);
                    opacity: 0.3;
                }

                /* ═══════════════════ Timeline Item ═══════════════════ */
                .timeline-item {
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 60px;
                    width: 100%;
                }

                .timeline-item:last-child {
                    margin-bottom: 0;
                }

                /* Left item: card on left, dot in center */
                .timeline-left {
                    justify-content: flex-start;
                    padding-right: calc(50% + 40px);
                    flex-direction: row-reverse;
                }
                .timeline-left .timeline-card {
                    text-align: right;
                }
                .timeline-left .timeline-meta {
                    justify-content: flex-end;
                }
                .timeline-left .timeline-title-row {
                    justify-content: flex-end;
                }
                .timeline-left .timeline-org {
                    text-align: right;
                }
                .timeline-left .timeline-desc {
                    text-align: justify;
                }

                /* Right item: card on right */
                .timeline-right {
                    justify-content: flex-end;
                    padding-left: calc(50% + 40px);
                }

                /* ═══════════════════ Timeline Dot ═══════════════════ */
                .timeline-dot {
                    position: absolute;
                    left: 50%;
                    top: 28px;
                    transform: translateX(-50%);
                    width: 18px;
                    height: 18px;
                    z-index: 3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .timeline-dot-inner {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--dot-color);
                    box-shadow: 0 0 12px var(--dot-glow), 0 0 24px var(--dot-glow);
                    z-index: 2;
                    transition: all 0.4s ease;
                }

                .timeline-dot-pulse {
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 2px solid var(--dot-color);
                    opacity: 0;
                    animation: dot-pulse 3s ease-in-out infinite;
                }

                @keyframes dot-pulse {
                    0%, 100% { opacity: 0; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(2); }
                }

                .timeline-item:hover .timeline-dot-inner {
                    transform: scale(1.4);
                    box-shadow: 0 0 20px var(--dot-glow), 0 0 40px var(--dot-glow);
                }

                /* ═══════════════════ Connector Line ═══════════════════ */
                .timeline-connector {
                    position: absolute;
                    top: 35px;
                    height: 1px;
                    width: 30px;
                    background: var(--conn-color);
                    opacity: 0.5;
                    z-index: 2;
                }

                .timeline-left .timeline-connector {
                    right: calc(50% - 30px);
                    left: auto;
                }
                .timeline-right .timeline-connector {
                    left: calc(50% - 30px);
                    right: auto;
                }

                /* ═══════════════════ Timeline Card ═══════════════════ */
                .timeline-card {
                    position: relative;
                    width: 100%;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.025);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .timeline-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--card-accent-border);
                    box-shadow:
                        0 20px 60px -15px rgba(0, 0, 0, 0.5),
                        0 0 30px -10px var(--card-accent-glow),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05);
                }

                /* Top accent bar */
                .timeline-card-accent-bar {
                    height: 3px;
                    width: 100%;
                    background: linear-gradient(90deg, transparent, var(--card-accent), transparent);
                    opacity: 0.6;
                    transition: opacity 0.4s ease;
                }
                .timeline-card:hover .timeline-card-accent-bar {
                    opacity: 1;
                }

                /* Card body */
                .timeline-card-body {
                    padding: 28px 28px 24px;
                    position: relative;
                    z-index: 2;
                }

                /* Meta row */
                .timeline-meta {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 16px;
                    flex-wrap: wrap;
                }

                .timeline-year {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    background: var(--accent-faded);
                    color: var(--accent);
                    font-family: 'Inter', monospace;
                }

                .timeline-type {
                    font-size: 0.625rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 5px 12px;
                    border-radius: 9999px;
                    border: 1px solid;
                }

                /* Title row */
                .timeline-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                }

                .timeline-icon {
                    font-size: 1.4rem;
                    filter: grayscale(0.2);
                }

                .timeline-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    line-height: 1.3;
                }

                .timeline-org {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: var(--card-accent);
                    margin-bottom: 14px;
                    letter-spacing: 0.01em;
                }

                .timeline-desc {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    line-height: 1.75;
                    text-align: justify;
                }

                /* Hover glow overlay */
                .timeline-card-glow {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at center, var(--card-accent-glow) 0%, transparent 50%);
                    opacity: 0;
                    transform: scale(0.5);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                    z-index: 1;
                }

                .timeline-card:hover .timeline-card-glow {
                    opacity: 0.15;
                    transform: scale(1);
                }

                /* ═══════════════════ Responsive ═══════════════════ */
                @media (max-width: 768px) {
                    .resume-section {
                        padding: 80px 0 !important;
                    }

                    .resume-header {
                        margin-bottom: 50px;
                    }

                    .timeline-wrapper {
                        padding-left: 24px;
                    }

                    /* Move line to the left */
                    .timeline-line {
                        left: 0;
                    }

                    /* Stack all items to the right */
                    .timeline-left,
                    .timeline-right {
                        padding-left: 36px !important;
                        padding-right: 0 !important;
                        justify-content: flex-start !important;
                        flex-direction: row !important;
                    }

                    .timeline-left .timeline-card,
                    .timeline-right .timeline-card {
                        text-align: left;
                    }
                    .timeline-left .timeline-meta,
                    .timeline-right .timeline-meta {
                        justify-content: flex-start;
                    }
                    .timeline-left .timeline-title-row,
                    .timeline-right .timeline-title-row {
                        justify-content: flex-start;
                    }
                    .timeline-left .timeline-org,
                    .timeline-left .timeline-desc {
                        text-align: justify;
                    }

                    /* Dot on the left */
                    .timeline-dot {
                        left: 0 !important;
                    }

                    /* Connector */
                    .timeline-left .timeline-connector,
                    .timeline-right .timeline-connector {
                        left: 10px !important;
                        right: auto !important;
                        width: 20px;
                    }

                    .timeline-item {
                        margin-bottom: 40px;
                    }

                    .timeline-card {
                        backdrop-filter: none;
                        -webkit-backdrop-filter: none;
                        background: rgba(255, 255, 255, 0.03);
                    }

                    .timeline-card-body {
                        padding: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .timeline-wrapper {
                        padding-left: 16px;
                    }

                    .timeline-left,
                    .timeline-right {
                        padding-left: 28px !important;
                    }

                    .timeline-card-body {
                        padding: 16px;
                    }

                    .timeline-title {
                        font-size: 1rem;
                    }

                    .timeline-desc {
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </section>
    );
}
