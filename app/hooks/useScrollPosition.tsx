import { useState, useEffect, useCallback } from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updatePosition = useCallback(() => {
        const { scrollY } = window;
        setScrollPosition(scrollY);
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', updatePosition, { passive: true });

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, [updatePosition]);

    return scrollPosition;
}
