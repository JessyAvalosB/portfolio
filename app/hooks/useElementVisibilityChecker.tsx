import { useState, useEffect, useRef } from 'react'

export const useElementVisibilityChecker = (ref: any) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting)
            },
            {
                root: null, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.5, // 50% of target visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isVisible;
}
