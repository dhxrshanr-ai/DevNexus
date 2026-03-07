import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 150 });

    return (
        <section
            id="projects"
            className="projects-section"
            style={{ background: 'var(--bg-primary)', paddingTop: 100, paddingBottom: 80 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal projects-header">
                    <div>
                        <p className="section-label">My work</p>
                        <h2 className="section-title" style={{ marginBottom: 8 }}>Projects</h2>
                        <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: 'var(--text-secondary)', maxWidth: 400 }}>
                            Handpicked work that showcases my abilities
                        </p>
                    </div>
                    <a
                        href="https://github.com/dhxrshanr-ai?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline projects-github-btn"
                    >
                        View All on GitHub →
                    </a>
                </div>

                {/* Grid */}
                <div ref={gridRef} className="reveal">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="reveal-stagger group projects-card">
                                {/* Image */}
                                <div className="projects-card-img">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                        className="group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                                        style={{ background: 'rgba(10,10,10,0.7)' }}
                                    >

                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '8px 16px' }}>
                                            Source Code
                                        </a>
                                    </div>
                                </div>

                                {/* Info */}
                                <div style={{ padding: 20 }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {project.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                                                    padding: '4px 12px', borderRadius: 9999,
                                                    background: 'rgba(201,168,76,0.1)', color: 'var(--accent)', border: '1px solid rgba(201,168,76,0.2)',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .projects-header {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 16px;
                    margin-bottom: 48px;
                }
                .projects-github-btn {
                    font-size: 0.75rem;
                    padding: 10px 20px;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .projects-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.5s ease;
                }
                .projects-card:hover {
                    border-color: var(--accent);
                    transform: translateY(-6px);
                    box-shadow: 0 20px 60px rgba(201,168,76,0.08);
                }
                .projects-card-img {
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 16/10;
                }
                @media (max-width: 767px) {
                    .projects-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .projects-header {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                    }
                    .projects-github-btn { margin-top: 16px; }
                    .projects-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
                    .projects-card-img { aspect-ratio: auto !important; height: 200px; }
                }
            `}</style>
        </section>
    );
}
