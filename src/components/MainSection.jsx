import React from 'react';
import person from '../assets/person-image.svg'
import diamondBG from '../assets/diamonds-bg.svg'
import AnimateOnScroll from './AnimationOnScroll';

function MainSection() {
  return (
    <section id='hero' className='main-section'>
      <div className='main-section-container'>
        <div className='main-section-text'>
          <AnimateOnScroll animation='fade-right' delay={100} threshold={0.9}>
            <h2 className="text-secondary-100 text-vw-lg font-['Lato']">Hi, I am Sev!</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation='fade-right' delay={300} threshold={0.9}>
            <h1 className="text-secondary-100 text-vw-4xl font-['Poppins'] text-shadow-main-text leading-tight">DESIGNER, <br />DEVELOPER</h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400} threshold={0.1}>
            <p className="text-secondary-100 text-vw-sm font-['Lato']">Bringing bold concepts to life, <br />one pixel at a time.</p>
          </AnimateOnScroll>
        </div>
        <div className='relative w-full h-[550px] md:h-[650px]'>
          <AnimateOnScroll animation='fade-in' delay={1200}>
            <img src={person} alt="Sev" className='absolute top-[65px] md:top-6 right-[90px] md:right-24 z-20 md:w-[600px] h-[470px] md:h-[600px]'/>
          </AnimateOnScroll>
          <AnimateOnScroll animation='zoom-in' delay={200} threshold={0.5}>
            <img src={diamondBG} className='absolute top-[-100px] md:top-[-82px] z-0 w-[750px] h-[750px]' />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export default MainSection;