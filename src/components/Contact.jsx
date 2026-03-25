import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

const contactInfo = [
    { icon: <FiMapPin />, label: 'Location', value: 'Theni, Tamil Nadu', href: 'Theni, Tamil Nadu' },
    { icon: <FiMail />, label: 'Email', value: 'dhxrshanr@gmail.com', href: 'mailto:dhxrshanr@gmail.com' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/dharshanr6/', href: 'https://www.linkedin.com/in/dharshanr6/' },
    { icon: <FiGithub />, label: 'GitHub', value: 'https://github.com/dhxrshanr-ai', href: 'https://github.com/dhxrshanr-ai' },
];

export default function Contact() {
    const headerRef = useScrollReveal();
    const formRef = useScrollReveal();
    const infoRef = useScrollReveal({ staggerDelay: 100 });

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format';
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/mjgavzoo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
    };

    const inputStyle = (hasError) => ({
        width: '100%',
        background: 'transparent',
        color: 'var(--text-primary)',
        padding: '12px 0',
        paddingBottom: 12,
        fontSize: '1rem',
        outline: 'none',
        border: 'none',
        borderBottom: `1px solid ${hasError ? '#EF4444' : 'rgba(255,255,255,0.15)'}`,
        fontFamily: 'inherit',
        transition: 'border-color 0.3s ease',
        minHeight: 44,
    });

    return (
        <section
            id="contact"
            className="contact-section"
            style={{ background: 'transparent', paddingTop: 100, paddingBottom: 100 }}
        >
            <div className="container">
                {/* Header */}
                <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p className="section-label">Get in touch</p>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
                        Have a project in mind? Let's build something great.
                    </p>
                </div>

                {/* 2-col grid */}
                <div className="contact-grid">
                    {/* Form */}
                    <div ref={formRef} className="reveal">
                        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                            <div>
                                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>
                                    Your Name
                                </label>
                                <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe"
                                    style={inputStyle(errors.name)}
                                    onFocus={(e) => { if (!errors.name) e.target.style.borderBottomColor = 'var(--accent)'; }}
                                    onBlur={(e) => { if (!errors.name) e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }}
                                />
                                {errors.name && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: 4 }}>{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>
                                    Your Email
                                </label>
                                <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                                    style={inputStyle(errors.email)}
                                    onFocus={(e) => { if (!errors.email) e.target.style.borderBottomColor = 'var(--accent)'; }}
                                    onBlur={(e) => { if (!errors.email) e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }}
                                />
                                {errors.email && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: 4 }}>{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>
                                    Your Message
                                </label>
                                <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
                                    style={{ ...inputStyle(errors.message), resize: 'none' }}
                                    onFocus={(e) => { if (!errors.message) e.target.style.borderBottomColor = 'var(--accent)'; }}
                                    onBlur={(e) => { if (!errors.message) e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'; }}
                                />
                                {errors.message && <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: 4 }}>{errors.message}</p>}
                            </div>

                            <button type="submit" disabled={status === 'sending'} className="btn btn-primary"
                                style={{ width: '100%', marginTop: 12, opacity: status === 'sending' ? 0.6 : 1 }}
                            >
                                {status === 'sending' && <span style={{ width: 16, height: 16, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', display: 'inline-block' }} />}
                                {status === 'idle' && 'Send Message'}
                                {status === 'sending' && 'Sending...'}
                                {status === 'sent' && '✓ Message Sent!'}
                                {status === 'error' && 'Try Again'}
                            </button>

                            {status === 'sent' && <p style={{ fontSize: '0.875rem', color: 'var(--success)' }}>Thank you! I'll get back to you soon.</p>}
                        </form>
                    </div>

                    {/* Info */}
                    <div ref={infoRef} className="reveal">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {contactInfo.map((info, i) => {
                                const cardContent = (
                                    <>
                                        <span style={{ fontSize: '1.5rem' }}>{info.icon}</span>
                                        <div>
                                            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 2 }}>
                                                {info.label}
                                            </p>
                                            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                                                {info.value}
                                            </p>
                                        </div>
                                    </>
                                );

                                const cardStyle = {
                                    display: 'flex', alignItems: 'center', gap: 16, padding: 20,
                                    borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    transition: 'all 0.3s ease', width: '100%',
                                };

                                return info.href ? (
                                    <a key={i} href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="reveal-stagger contact-info-card"
                                        style={cardStyle}
                                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        {cardContent}
                                    </a>
                                ) : (
                                    <div key={i} className="reveal-stagger contact-info-card" style={cardStyle}>
                                        {cardContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                @media (max-width: 767px) {
                    .contact-section { padding-top: 60px !important; padding-bottom: 60px !important; }
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    .contact-info-card { padding: 16px !important; }
                }
            `}</style>
        </section>
    );
}
