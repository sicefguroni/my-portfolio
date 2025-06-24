import React, { useState, useEffect, useRef, useCallback } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-up', threshold = 0.1, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    const handleIntersection = useCallback(([entry]) => {
        if (entry.isIntersecting && !isVisible) {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(() => {
                setTimeout(() => {
                    setIsVisible(true);
                }, delay);
            });
        }
    }, [delay, isVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            handleIntersection,
            { 
                threshold,
                rootMargin: '50px' // Start animation slightly before element comes into view
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
    }, [threshold, handleIntersection]);

    const getAnimationClasses = () => {
        const baseClasses = 'transition-all duration-700 ease-out will-change-transform';

        const animations = {
            'fade-in': isVisible 
              ? 'opacity-100' 
              : 'opacity-0',
            'fade-up': isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6',
            'fade-down': isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-6',
            'fade-left': isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-6',
            'fade-right': isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-6',
            'zoom-in': isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95',
            'zoom-out': isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105',
        };
        return `${baseClasses} ${animations[animation] || animations['fade-up']}`;
    };
    
    return (
        <div ref={ref} className={getAnimationClasses()}>
            {children}
        </div>
    )
};

export default AnimateOnScroll