import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add revealed class with optional stagger delay
                        const children = element.querySelectorAll('.reveal-stagger');
                        if (children.length > 0) {
                            children.forEach((child, index) => {
                                setTimeout(() => {
                                    child.classList.add('revealed');
                                }, index * (options.staggerDelay || 100));
                            });
                        }
                        element.classList.add('revealed');
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin, options.staggerDelay]);

    return ref;
}
