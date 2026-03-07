import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [position, setPosition] = useState(() => {
        if (typeof window === 'undefined') {
            return { x: 0, y: 0 };
        }
        return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    });
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        const hoverNone = window.matchMedia?.('(hover: none)');

        const updateEnabled = () => {
            const shouldDisable =
                (prefersReducedMotion && prefersReducedMotion.matches) ||
                (hoverNone && hoverNone.matches);
            setEnabled(!shouldDisable);
        };

        updateEnabled();

        prefersReducedMotion?.addEventListener('change', updateEnabled);
        hoverNone?.addEventListener('change', updateEnabled);

        return () => {
            prefersReducedMotion?.removeEventListener('change', updateEnabled);
            hoverNone?.removeEventListener('change', updateEnabled);
        };
    }, []);

    useEffect(() => {
        if (!enabled || typeof window === 'undefined') return;

        const handleMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            setPosition({ x, y });
        };

        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div
            className="cursor-glow"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}

