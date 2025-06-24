import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimateOnScroll from './AnimationOnScroll';
import Image1 from '../assets/designs/image-1.png';
import Image2 from '../assets/designs/image-2.png';
import Image3 from '../assets/designs/image-3.png';
import Image4 from '../assets/designs/image-4.png';
import Image5 from '../assets/designs/image-5.png';
import Image6 from '../assets/designs/image-6.png';

const CANVA = [Image1, Image2, Image3, Image4, Image5, Image6];
const FIGMA = [];
const FLUTTER = [];
const REACT = [];
const MAX_VISIBILITY = 3;

const Card = ({ Image }) => (
  <div className="w-full h-full flex items-center justify-center transition-all duration-300 ease-out"> 
    <img 
      src={Image} 
      alt="Design"
      className="md:w-full object-contain rounded-xl shadow-xl"
      loading="lazy"
    />
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); 

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    const deltaX = currentX - startX;
    const threshold = 50;
    
    if (deltaX > threshold && active > 0) {
      setActive(i => i - 1);
    } else if (deltaX < -threshold && active < count - 1) {
      setActive(i => i + 1);
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  }, [isDragging, currentX, startX, active, count]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    const threshold = 30;
    
    if (e.deltaX > threshold && active < count - 1) {
      setActive(i => i + 1);
    } else if (e.deltaX < -threshold && active > 0) {
      setActive(i => i - 1);
    }
    
    setTimeout(() => setIsScrolling(false), 200);
  }, [isScrolling, active, count]);
  
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 cursor-grab active:cursor-grabbing" 
         style={{ 
           perspective: '500px', 
           transformStyle: 'preserve-3d' 
         }}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseLeave}
         onWheel={handleWheel}>
      {active > 0 && (
        <button 
          className="absolute top-1/2 z-10 flex items-center justify-center text-white text-8xl cursor-pointer select-none transition-all hover:bg-black hover:bg-opacity-40 p-2 rounded-full border-none"
          style={{ 
            transform: 'translateX(-100%) translateY(-50%)',
            left: -15
          }}
          onClick={() => setActive(i => i - 1)}
        >
          <ChevronLeft />
        </button>
      )}
      
      {React.Children.map(children, (child, i) => (
        <div 
          key={i}
          className="absolute w-full h-full transition-all duration-300 ease-out"
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            transform: `
              rotateY(calc(var(--offset) * 50deg)) 
              scaleY(calc(1 + var(--abs-offset) * -0.4))
              translateZ(calc(var(--abs-offset) * -30rem))
              translateX(calc(var(--direction) * -5rem))
            `,
            filter: `blur(calc(var(--abs-offset) * 1rem))`,
            pointerEvents: active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      
      {active < count - 1 && (
        <button 
          className="absolute top-1/2 z-10 flex items-center justify-center text-white text-8xl cursor-pointer select-none transition-all hover:bg-black hover:bg-opacity-40 p-2 rounded-full border-none"
          style={{ 
            transform: 'translateX(100%) translateY(-50%)',
            right: -15
          }}
          onClick={() => setActive(i => i + 1)}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

const DesignsCarousel = () => (
  <div className="md:w-full h-full flex items-center justify-center overflow-hidden font-sans">
    <AnimateOnScroll animation='fade-in' delay={300} threshold={0.3}>
      <Carousel>
        {CANVA.map((image, i) => (
          <Card key={i} Image={image} />
        ))}
      </Carousel>
    </AnimateOnScroll>
  </div>
);

export default DesignsCarousel;