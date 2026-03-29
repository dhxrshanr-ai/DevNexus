import { useState, useEffect } from 'react';
import { skillCategories, coreSkills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
    const headerRef = useScrollReveal();
    const coreSkillsRef = useScrollReveal({ staggerDelay: 80 });

    const [activeTab, setActiveTab] = useState(skillCategories[0]?.title || '');
    const [isMobile, setIsMobile] = useState(false);
    const [openAccordions, setOpenAccordions] = useState([]);
    const [showCoreSkills, setShowCoreSkills] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleAccordion = (title) => {
        setOpenAccordions(prev =>
            prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
        );
    };

    const activeCategory = skillCategories.find(c => c.title === activeTab);

    return (
        <section id="skills" className="skills-section-new">
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal section-header">
                    <p className="section-label-minimal">Expertise</p>
                    <h2 className="section-title-bold">My Tech Stack</h2>
                    <p className="section-desc">
                        A curated selection of tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                {/* Main Skills Interaction Area */}
                {!isMobile ? (
                    <div className="skills-split-layout">
                        {/* Left Sidebar */}
                        <div className="skills-sidebar">
                            <div className="sidebar-inner">
                                {skillCategories.map((cat) => (
                                    <button
                                        key={cat.title}
                                        className={`sidebar-item ${activeTab === cat.title ? 'active' : ''}`}
                                        onClick={() => setActiveTab(cat.title)}
                                    >
                                        <div className="item-dot"></div>
                                        <span className="item-text">{cat.title}</span>
                                        <div className="active-glow"></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="skills-content-panel" key={activeTab}>
                            <div className="content-header">
                                <h3 className="cat-header-title">{activeTab}</h3>
                                <div className="cat-header-line"></div>
                            </div>
                            <div className="skills-grid-modern">
                                {activeCategory?.skills.map((skill, idx) => (
                                    <div key={skill.name} className="skill-item-modern fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                                        <div className="skill-icon-wrap">
                                            {skill.icon}
                                        </div>
                                        <div className="skill-info">
                                            <h4 className="skill-name-txt">{skill.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Mobile View: Premium Accordion */
                    <div className="mobile-accordion-list">
                        {skillCategories.map((category) => {
                            const isOpen = openAccordions.includes(category.title);
                            return (
                                <div key={category.title} className={`modern-acc-item ${isOpen ? 'open' : ''}`}>
                                    <button
                                        className="acc-trigger"
                                        onClick={() => toggleAccordion(category.title)}
                                    >
                                        <div className="trigger-left">
                                            <div className="trigger-bar"></div>
                                            <span className="acc-title">{category.title}</span>
                                        </div>
                                        <span className="acc-icon-plus"></span>
                                    </button>
                                    <div className="acc-body">
                                        <div className="acc-grid">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="acc-skill-card">
                                                    <span className="acc-skill-icon">{skill.icon}</span>
                                                    <span className="acc-skill-name">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Core Skills - Structured Grid */}
                <div ref={coreSkillsRef} className="reveal core-skills-redesign">
                    <div className="core-header-wrap">
                        <div className="line"></div>
                        <h2 className="title">Core Skills</h2>
                        <div className="line"></div>
                    </div>
                    
                    <div className={`core-grid-container ${showCoreSkills ? 'expanded' : ''}`}>
                        <div className="core-grid">
                            {coreSkills.map((skill, index) => (
                                <div key={index} className="core-card">
                                    <div className="card-check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="card-text">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="core-view-more">
                        <button 
                            className="btn-view-skills"
                            onClick={() => setShowCoreSkills(!showCoreSkills)}
                        >
                            {showCoreSkills ? 'Hide' : 'View'}
                            <span className={`arrow ${showCoreSkills ? 'up' : 'down'}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .skills-section-new { padding: 120px 0; background: transparent; overflow: hidden; }
                .section-header { text-align: center; margin-bottom: 80px; }
                .section-label-minimal { color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.2rem; font-size: 0.75rem; margin-bottom: 12px; }
                .section-title-bold { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; color: var(--text-primary); margin-bottom: 24px; }
                .section-desc { color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6; }

                /* Split Layout Desktop */
                .skills-split-layout {
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 32px;
                    max-width: 1100px;
                    margin: 0 auto;
                    min-height: auto;
                    background: rgba(255, 255, 255, 0.01);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 24px;
                    border-radius: 32px;
                    backdrop-filter: blur(20px);
                }

                .skills-sidebar { display: flex; flex-direction: column; gap: 8px; border-right: 1px solid rgba(255, 255, 255, 0.05); padding-right: 32px; }
                .sidebar-item {
                    background: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 20px;
                    border-radius: 16px;
                    color: var(--text-muted);
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    text-align: left;
                    overflow: hidden;
                }
                .item-dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; opacity: 0.3; transition: all 0.3s ease; }
                .sidebar-item.active { color: white; background: rgba(255, 255, 255, 0.03); }
                .sidebar-item.active .item-dot { background: var(--accent); opacity: 1; box-shadow: 0 0 10px var(--accent-glow); transform: scale(1.5); }
                .active-glow { position: absolute; left: 0; top: 0; height: 100%; width: 3px; background: var(--accent); opacity: 0; transition: all 0.3s ease; }
                .sidebar-item.active .active-glow { opacity: 1; box-shadow: 0 0 15px var(--accent-glow); }

                .skills-content-panel { padding-left: 8px; }
                .content-header { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; }
                .cat-header-title { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin: 0; }
                .cat-header-line { flex-grow: 1; height: 1px; background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent); }

                .skills-grid-modern { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
                .skill-item-modern {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 24px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .skill-item-modern:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--accent);
                    transform: translateX(10px);
                    box-shadow: -10px 10px 40px -15px rgba(0,0,0,0.5);
                }
                .skill-icon-wrap { font-size: 2rem; }
                .skill-name-txt { font-weight: 700; color: var(--text-primary); margin: 0; font-size: 1.1rem; }

                .fade-up { animation: fadeUp 0.5s ease backwards; }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

                /* Mobile Accordion */
                .mobile-accordion-list { display: flex; flex-direction: column; gap: 12px; }
                .modern-acc-item { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; overflow: hidden; }
                .acc-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 24px; background: none; border: none; cursor: pointer; color: white; }
                .trigger-left { display: flex; align-items: center; gap: 16px; }
                .trigger-bar { width: 4px; height: 20px; background: #374151; border-radius: 2px; transition: all 0.3s ease; }
                .modern-acc-item.open .trigger-bar { background: var(--accent); height: 24px; box-shadow: 0 0 10px var(--accent-glow); }
                .acc-title { font-weight: 700; font-size: 1.1rem; }
                .acc-icon-plus { width: 20px; height: 20px; position: relative; }
                .acc-icon-plus::before, .acc-icon-plus::after { content: ''; position: absolute; background: #6b7280; border-radius: 2px; transition: all 0.3s ease; }
                .acc-icon-plus::before { width: 100%; height: 2px; top: 9px; left: 0; }
                .acc-icon-plus::after { width: 2px; height: 100%; top: 0; left: 9px; }
                .modern-acc-item.open .acc-icon-plus::after { transform: rotate(90deg); opacity: 0; }
                .modern-acc-item.open .acc-icon-plus::before { background: var(--accent); }
                .acc-body { max-height: 0; overflow: hidden; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
                .modern-acc-item.open .acc-body { max-height: 1000px; padding: 0 24px 24px; opacity: 1; }
                .acc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
                .acc-skill-card { background: rgba(255, 255, 255, 0.03); padding: 16px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
                .acc-skill-icon { font-size: 2rem; }
                .acc-skill-name { font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); }

                /* Core Skills Section */
                .core-skills-redesign { margin-top: 100px; max-width: 900px; margin-left: auto; margin-right: auto; }
                .core-header-wrap { display: flex; align-items: center; gap: 24px; margin-bottom: 48px; }
                .core-header-wrap .line { flex-grow: 1; height: 1px; background: linear-gradient(to right, transparent, var(--accent), transparent); opacity: 0.3; }
                .core-header-wrap .title { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.2em; white-space: nowrap; }
                .core-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
                .core-card { display: flex; align-items: center; gap: 16px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 20px; transition: all 0.3s ease; }
                .core-card:hover { background: rgba(255, 255, 255, 0.04); border-color: var(--accent); transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
                .card-check { width: 20px; height: 20px; color: var(--accent); flex-shrink: 0; }
                .card-text { font-size: 1rem; font-weight: 600; color: var(--text-secondary); }
                .core-card:hover .card-text { color: var(--text-primary); }

                /* Collapsible Logic */
                .core-grid-container { 
                    max-height: 0; 
                    opacity: 0; 
                    overflow: hidden; 
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-bottom: 0;
                }
                .core-grid-container.expanded { 
                    max-height: 800px; 
                    opacity: 1; 
                    margin-bottom: 40px;
                    padding-top: 20px;
                }

                .core-view-more { 
                    display: flex; 
                    justify-content: center; 
                    margin-top: 24px; 
                }
                .btn-view-skills {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text-primary);
                    padding: 12px 32px;
                    border-radius: 99px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.3s ease;
                }
                .btn-view-skills:hover {
                    background: var(--accent-faded);
                    border-color: var(--accent);
                    box-shadow: 0 0 20px var(--accent-faded);
                    transform: translateY(-2px);
                }
                .arrow {
                    width: 8px;
                    height: 8px;
                    border-right: 2px solid currentColor;
                    border-bottom: 2px solid currentColor;
                    transform: rotate(45deg);
                    margin-top: -4px;
                    transition: transform 0.3s ease;
                }
                .arrow.up { transform: rotate(-135deg); margin-top: 4px; }

                @media (max-width: 991px) {
                    .skills-split-layout { display: none; }
                }
                @media (max-width: 768px) {
                    .core-grid { grid-template-columns: 1fr; }
                    .core-header-wrap .title { font-size: 1.25rem; }
                }
            `}</style>
        </section>
    );
}
