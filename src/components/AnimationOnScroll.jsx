import React, { useState, useEffect, useRef } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-up', threshold = 0.1, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start animation with delay
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, delay]);

    const getAnimationClasses = () => {
        const baseClasses = 'transition-all duration-1000 ease-out';

        const animations = {
            'fade-in': isVisible 
              ? 'opacity-100' 
              : 'opacity-0',
            'fade-up': isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8',
            'fade-down': isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8',
            'fade-left': isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8',
            'fade-right': isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8',
            'zoom-in': isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90',
            'zoom-out': isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110',
            'rotate-in': isVisible 
              ? 'opacity-100 rotate-0' 
              : 'opacity-0 rotate-12',
            'flip-up': isVisible 
              ? 'opacity-100 transform' 
              : 'opacity-0 transform rotate-x-90',
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