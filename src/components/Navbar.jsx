import { useState, useEffect, useCallback } from 'react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Close on Escape key
    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    }, [menuOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [handleEscape]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
                    transition: 'all 0.5s ease',
                }}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="navbar-inner">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        style={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            textDecoration: 'none',
                        }}
                    >
                        DevNexus
                    </a>

                    {/* Desktop Links */}
                    <div className="navbar-desktop-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    transition: 'color 0.3s',
                                    color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                                }}
                                onMouseEnter={(e) => { if (activeSection !== link.href.slice(1)) e.target.style.color = 'var(--text-primary)'; }}
                                onMouseLeave={(e) => { if (activeSection !== link.href.slice(1)) e.target.style.color = 'var(--text-secondary)'; }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>



                    {/* Hamburger / X toggle */}
                    <button
                        className="navbar-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            /* X icon */
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                <line x1="6" y1="6" x2="22" y2="22" />
                                <line x1="22" y1="6" x2="6" y2="22" />
                            </svg>
                        ) : (
                            /* Hamburger icon */
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                <line x1="4" y1="7" x2="24" y2="7" />
                                <line x1="4" y1="14" x2="24" y2="14" />
                                <line x1="4" y1="21" x2="24" y2="21" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className="navbar-overlay"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'rgba(5, 5, 5, 0.98)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    transition: 'opacity 0.3s ease',
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'auto' : 'none',
                }}
                onClick={(e) => {
                    // Close when clicking the overlay background (not children)
                    if (e.target === e.currentTarget) setMenuOpen(false);
                }}
            >
                {/* X close button — top-right corner */}
                <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8,
                        zIndex: 10000,
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <line x1="6" y1="6" x2="22" y2="22" />
                        <line x1="22" y1="6" x2="6" y2="22" />
                    </svg>
                </button>

                {/* Nav Links */}
                {navLinks.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--text-primary)',
                            padding: 20,
                            textDecoration: 'none',
                            transition: `all 0.3s ease ${menuOpen ? i * 60 : 0}ms`,
                            opacity: menuOpen ? 1 : 0,
                            transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        }}
                    >
                        {link.label}
                    </a>
                ))}


            </div>

            <style>{`
                .navbar-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 64px;
                    padding: 0 60px;
                }
                .navbar-desktop-links {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }
                .navbar-desktop-cta {
                    display: inline-flex;
                }
                .navbar-hamburger {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    line-height: 0;
                }
                @media (max-width: 767px) {
                    .navbar-inner {
                        height: 64px;
                        padding: 0 24px !important;
                    }
                    .navbar-desktop-links { display: none !important; }
                    .navbar-desktop-cta { display: none !important; }
                    .navbar-hamburger { display: block !important; }
                }
            `}</style>
        </>
    );
}
