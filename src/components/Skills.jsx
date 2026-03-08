import { skillCategories, coreSkills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
    const headerRef = useScrollReveal();
    const categoriesRef = useScrollReveal({ staggerDelay: 80 });
    const coreSkillsRef = useScrollReveal({ staggerDelay: 80 });

    return (
        <section
            id="skills"
            className="skills-section"
            style={{ background: 'var(--bg-card)', paddingTop: 120, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
                    <p className="section-label">What I work with</p>
                    <h2 className="section-title">My Tech Stack</h2>
                    <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
                        Creative, passionate, and approachable.
                    </p>
                </div>

                {/* Categories */}
                <div ref={categoriesRef} className="reveal">
                    <div className="categories-grid">
                        {skillCategories.map((category) => (
                            <div key={category.title} className="reveal-stagger category-list-section">
                                <h3 className="category-title">{category.title}</h3>
                                <div className="skills-list-grid">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="skill-list-card"
                                        >
                                            <span className="skills-icon" role="img" aria-label={skill.name}>
                                                {skill.icon}
                                            </span>
                                            <span>
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Skills */}
                <div ref={coreSkillsRef} className="reveal" style={{ marginTop: 80 }}>
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <h3 className="section-title" style={{ fontSize: '2rem' }}>Core Skills</h3>
                    </div>
                    <div className="core-skills-grid">
                        {coreSkills.map((skill, index) => (
                            <div key={index} className="reveal-stagger core-skill-card">
                                <span style={{ color: 'var(--accent)', marginRight: 12 }}>✔️</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .categories-grid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .category-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #9ca3af;
                    margin-bottom: 16px;
                }
                .category-list-section {
                    width: 100%;
                }
                .skills-list-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    width: 100%;
                }
                .skill-list-card {
                    background: var(--bg-primary);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    transition: all 0.2s ease;
                }
                .skill-list-card:hover {
                    border-color: #2dd4bf;
                    color: var(--text-primary);
                    transform: scale(1.02);
                }
                .skills-icon { font-size: 1.5rem; display: flex; justify-content: center; align-items: center; line-height: 1; margin-right: 12px; }
                .skills-icon img, .skills-icon svg { width: 1em; height: 1em; object-fit: contain; }
                
                .core-skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .core-skill-card {
                    background: var(--bg-primary);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    transition: all 0.2s ease;
                }
                .core-skill-card:hover {
                    border-color: #2dd4bf;
                    color: var(--text-primary);
                    transform: scale(1.02);
                }
                
                @media (max-width: 767px) {
                    .skills-section { 
                        padding-top: 60px !important; 
                        padding-bottom: 60px !important; 
                        padding-left: 16px !important;
                        padding-right: 16px !important;
                    }
                    .skills-list-grid { grid-template-columns: 1fr !important; }
                    .core-skills-grid { grid-template-columns: 1fr !important; }
                }
                @media (min-width: 768px) {
                    .skills-section {
                        padding-left: 32px !important;
                        padding-right: 32px !important;
                    }
                }
            `}</style>
        </section>
    );
}
