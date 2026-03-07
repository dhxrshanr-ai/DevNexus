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
                className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="navbar-inner">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="navbar-logo"
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
                                className={
                                    'navbar-link' +
                                    (activeSection === link.href.slice(1) ? ' navbar-link--active' : '')
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="btn btn-primary navbar-desktop-cta"
                    >
                        Hire Me
                    </a>

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
                className={`navbar-overlay ${menuOpen ? 'navbar-overlay--open' : ''}`}
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
                        className="navbar-overlay-link"
                        style={{
                            transition: `all 0.3s ease ${menuOpen ? i * 60 : 0}ms`,
                            opacity: menuOpen ? 1 : 0,
                            transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        }}
                    >
                        {link.label}
                    </a>
                ))}

                {/* Hire Me */}
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="btn btn-primary"
                    style={{
                        marginTop: 16,
                        transition: `all 0.3s ease ${menuOpen ? navLinks.length * 60 : 0}ms`,
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                    }}
                >
                    Hire Me
                </a>
            </div>
        </>
    );
}
