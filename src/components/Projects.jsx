import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
    const headerRef = useScrollReveal();
    const gridRef = useScrollReveal({ staggerDelay: 150 });

    return (
        <section
            id="projects"
            className="projects-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 80 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal projects-header">
                    <h2 className="section-title">Projects</h2>
                    <p className="projects-subtitle">
                        Handpicked work that showcases my abilities
                    </p>
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
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="projects-bg-img"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="projects-overlay" />

                                {/* Content */}
                                <div className="projects-content">
                                    <h3 className="projects-title">{project.title}</h3>
                                    <p className="projects-desc">{project.description}</p>
                                    
                                    <div className="projects-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="projects-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions (Slide up on hover) */}
                                    <div className="projects-actions">
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-primary" 
                                            style={{ fontSize: '0.75rem', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}
                                        >
                                            <span className="live-dot"></span>
                                            Live Visit
                                        </a>
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                                            Source Code
                                        </a>
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
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 16px;
                    margin-bottom: 64px;
                }
                .projects-subtitle {
                    font-size: clamp(0.9375rem, 2.5vw, 1.125rem);
                    color: var(--text-secondary);
                    max-width: 600px;
                    line-height: 1.6;
                    margin: 0;
                }
                .projects-github-btn {
                    font-size: 0.75rem;
                    padding: 10px 24px;
                    margin-top: 8px;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .projects-card {
                    position: relative;
                    border-radius: 24px;
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    aspect-ratio: 4/3;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    will-change: transform, opacity;
                }
                .projects-bg-img {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 0;
                    will-change: transform;
                }
                .projects-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 40%, transparent 100%);
                    z-index: 1;
                    transition: all 0.5s ease;
                }
                .projects-content {
                    position: relative;
                    z-index: 2;
                    padding: 32px;
                    transform: translateY(32px);
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .projects-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 8px;
                }
                .projects-desc {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 16px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: color 0.3s ease;
                }
                .projects-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                .projects-tag {
                    font-size: 0.625rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    background: rgba(255,255,255,0.1);
                    color: #fff;
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                 .projects-actions {
                    opacity: 0;
                    display: flex;
                    gap: 12px;
                    transition: all 0.4s ease;
                }
                .live-dot {
                    width: 8px;
                    height: 8px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #fff;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                
                /* Hover Effects */
                .projects-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--accent);
                    box-shadow: 0 20px 50px -10px rgba(0,0,0,0.5), 0 0 20px var(--accent-faded);
                }
                .projects-card:hover .projects-bg-img {
                    transform: scale(1.08);
                }
                .projects-card:hover .projects-overlay {
                    background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.8) 60%, rgba(5,5,5,0.2) 100%);
                }
                .projects-card:hover .projects-content {
                    transform: translateY(0);
                }
                .projects-card:hover .projects-desc {
                    color: #fff;
                }
                .projects-card:hover .projects-actions {
                    opacity: 1;
                }
                .projects-card:hover .projects-tag {
                    background: var(--accent-faded);
                    color: var(--accent);
                    border-color: var(--accent-glow);
                }

                @media (max-width: 767px) {
                    .projects-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .projects-header { flex-direction: column !important; align-items: center !important; text-align: center !important; }
                    .projects-github-btn { margin-top: 16px; }
                    .projects-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                    .projects-card { aspect-ratio: auto !important; min-height: 400px; justify-content: flex-end; }
                    
                    /* Always show content on mobile */
                    .projects-content { transform: translateY(0) !important; padding: 24px !important; }
                    .projects-actions { opacity: 1 !important; }
                    .projects-overlay { background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 60%, transparent 100%) !important; }
                }
            `}</style>
        </section>
    );
}
