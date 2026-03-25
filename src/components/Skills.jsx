import { useState, useEffect } from 'react';
import { skillCategories, coreSkills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
    const headerRef = useScrollReveal();
    const categoriesRef = useScrollReveal({ staggerDelay: 80 });
    const coreSkillsRef = useScrollReveal({ staggerDelay: 80 });

    const tabs = skillCategories.map(c => c.title);

    // Shared State
    const [isMobile, setIsMobile] = useState(false);

    // Desktop State
    const [activeTab, setActiveTab] = useState(skillCategories[0]?.title || '');
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    // Mobile State
    const [openAccordions, setOpenAccordions] = useState([]); // All closed by default
    const [isCoreSkillsOpen, setIsCoreSkillsOpen] = useState(false); // Closed by default

    // Handle Window Resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop Auto-advance Timer
    useEffect(() => {
        if (isMobile || isHovered) return;

        const interval = 30; // ms
        const duration = 3000; // ms
        const increment = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setActiveTab(current => {
                        const currentIndex = tabs.indexOf(current);
                        const nextIndex = (currentIndex + 1) % tabs.length;
                        return tabs[nextIndex];
                    });
                    return 0;
                }
                return prev + increment;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isMobile, isHovered, tabs]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setProgress(0);
    };

    const toggleAccordion = (title) => {
        setOpenAccordions(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    const displayCategories = skillCategories.filter(c => c.title === activeTab);

    return (
        <section
            id="skills"
            className="skills-section"
            style={{ background: 'transparent', paddingTop: 120, paddingBottom: 100 }}
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

                <div
                    ref={categoriesRef}
                    className="reveal interactive-skills-container"
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                >
                    {!isMobile ? (
                        /* DESKTOP VIEW: Tabbed Carousel */
                        <>
                            <div className="skills-tabs-scroll">
                                <div className="skills-tabs">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab}
                                            className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="progress-bar-container">
                                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                            </div>

                            <div className="categories-container" key={activeTab}>
                                {displayCategories.map((category) => (
                                    <div key={category.title} className="category-section slide-in">
                                        <div className="skills-list-grid desktop-grid">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="skill-list-card desktop-card">
                                                    <span className="skills-icon desktop-icon" role="img" aria-label={skill.name}>
                                                        {skill.icon}
                                                    </span>
                                                    <span className="skill-name desktop-name">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        /* MOBILE VIEW: Accordion Stack */
                        <div className="accordion-container">
                            {skillCategories.map((category) => {
                                const isOpen = openAccordions.includes(category.title);
                                return (
                                    <div key={category.title} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                                        <button
                                            className="accordion-header"
                                            onClick={() => toggleAccordion(category.title)}
                                        >
                                            <h3 className="accordion-title">{category.title}</h3>
                                            <span className="accordion-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </button>
                                        <div className="accordion-content">
                                            <div className="accordion-content-inner">
                                                <div className="skills-list-grid mobile-grid">
                                                    {category.skills.map((skill) => (
                                                        <div key={skill.name} className="skill-list-card mobile-card">
                                                            <span className="skills-icon mobile-icon" role="img" aria-label={skill.name}>
                                                                {skill.icon}
                                                            </span>
                                                            <span className="skill-name mobile-name">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Core Skills */}
                <div ref={coreSkillsRef} className="reveal accordion-container" style={{ marginTop: 80 }}>
                    <div className={`accordion-item ${isCoreSkillsOpen ? 'open' : ''}`}>
                        <button
                            className="accordion-header"
                            onClick={() => setIsCoreSkillsOpen(!isCoreSkillsOpen)}
                        >
                            <h3 className="accordion-title" style={{ fontSize: '1.5rem', margin: '0 auto' }}>Core Skills</h3>
                            <span className="accordion-icon" style={{ position: 'absolute', right: '20px' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content">
                            <div className="accordion-content-inner">
                                <div className="core-skills-grid" style={{ paddingTop: '20px' }}>
                                    {coreSkills.map((skill, index) => (
                                        <div key={index} className="reveal-stagger core-skill-card">
                                            <span style={{ color: 'var(--accent)', marginRight: 12 }}>✔️</span>
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                /* General Container */
                .interactive-skills-container {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                
                /* DESKTOP TABS & PROGRESS */
                .skills-tabs-scroll {
                    width: 100%;
                    overflow-x: auto;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    padding-bottom: 0px; /* Reduced vertical whitespace */
                }
                .skills-tabs-scroll::-webkit-scrollbar { display: none; }
                .skills-tabs {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    min-width: max-content;
                    margin: 0 auto;
                }
                .skill-tab-btn {
                    background: #111827;
                    border: 1px solid #374151;
                    color: #9ca3af;
                    padding: 8px 20px;
                    border-radius: 9999px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .skill-tab-btn:hover { background: #1f2937; color: white; }
                .skill-tab-btn.active {
                    background: var(--accent-faded);
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    box-shadow: 0 0 10px var(--accent-glow);
                }
                .progress-bar-container {
                    width: 100%;
                    height: 3px;
                    background: #374151;
                    border-radius: 2px;
                    overflow: hidden;
                    margin-top: 8px;
                    margin-bottom: 24px;
                }
                .progress-bar-fill {
                    height: 100%;
                    background: var(--accent);
                    transition: width 0.05s linear;
                }

                /* CATEGORIES CONTENT (Desktop) */
                .categories-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .category-section { width: 100%; }
                .slide-in { animation: slideInFade 0.3s ease forwards; }
                @keyframes slideInFade {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .category-header { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
                .category-title {
                    font-size: 0.95rem; font-weight: 600; color: var(--accent);
                    white-space: nowrap; text-transform: uppercase; letter-spacing: 0.05em;
                }
                .category-divider {
                    flex-grow: 1; height: 1px;
                    background: linear-gradient(to right, var(--accent-glow), transparent);
                }

                /* DESKTOP GRID & CARD */
                .desktop-grid {
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 12px;
                    justify-content: center;
                }
                /* Target grids with 2 items and manually restrict their width */
                .category-section:has(.skill-list-card:nth-last-child(2):first-child) .desktop-grid {
                    max-width: 320px;
                    margin: 0 auto;
                }
                .desktop-card { 
                    height: 90px;
                    min-height: 90px;
                    padding: 16px 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .desktop-icon { font-size: 32px; margin-bottom: 0; }
                .desktop-name { font-size: 13px; margin-top: 0; }

                /* MOBILE ACCORDION (Hidden on Desktop natively) */
                .accordion-container {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    width: 100%;
                }
                .accordion-item {
                    background: #0d1117;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: border-color 0.3s ease;
                }
                .accordion-item.open {
                    border-color: var(--accent-glow);
                }
                .accordion-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 20px;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    text-align: left;
                }
                .accordion-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: a1a1aa;
                    margin: 0;
                }
                .accordion-item.open .accordion-title {
                    color: var(--accent);
                }
                .accordion-icon {
                    color: #6b7280;
                    transition: transform 0.3s ease;
                    display: flex;
                    align-items: center;
                }
                .accordion-item.open .accordion-icon {
                    transform: rotate(180deg);
                    color: var(--accent);
                }
                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-in-out;
                }
                .accordion-item.open .accordion-content {
                    max-height: 2000px; /* arbitrary large max height for transition */
                }
                .accordion-content-inner {
                    padding: 0 16px 20px 16px;
                }

                /* MOBILE GRID & CARD */
                .mobile-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }
                .mobile-card {
                    height: 80px;
                    min-height: 80px;
                    padding: 8px;
                }
                .mobile-icon {
                    font-size: 22px;
                    margin-bottom: 4px;
                }
                .mobile-name {
                    font-size: 11px;
                }

                /* SHARED GRID BASE STYLES */
                .skills-list-grid {
                    display: grid;
                    width: 100%;
                }
                .skill-list-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: var(--text-secondary);
                    transition: all 0.2s ease;
                }
                .skill-list-card:hover {
                    border-color: var(--accent);
                    box-shadow: 0 0 12px var(--accent-glow);
                    transform: translateY(-2px);
                }
                .skill-name {
                    font-weight: 500;
                    margin-top: 4px;
                    transition: color 0.2s ease;
                }
                .skill-list-card:hover .skill-name {
                    color: var(--text-primary);
                }
                .skills-icon {
                    display: flex; justify-content: center; align-items: center; line-height: 1; 
                    color: var(--text-primary); 
                }
                .skills-icon img, .skills-icon svg { width: 1em; height: 1em; object-fit: contain; }

                /* CORE SKILLS - Minimal changes to maintain existing style */
                .core-skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .core-skill-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.08);
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
