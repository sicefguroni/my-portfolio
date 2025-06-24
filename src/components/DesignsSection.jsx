import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import canvaIcon from '../assets/colored/canva-icon.svg';
import figmaIcon from '../assets/colored/figma-icon.svg';
import flutterIcon from '../assets/colored/flutter-icon.svg';
import reactIcon from '../assets/colored/react-icon.svg';
import subsectionIcon from '../assets/subsection-icon.svg';
import DesignsCarousel from './DesignsCarousel';
import AnimateOnScroll from './AnimationOnScroll';


function DesignsSection() {
    const [showDesigns, setShowDesigns] = useState('CANVA');
    const [animateKey, setAnimateKey] = useState(0);

    const handleDesignChange = (design) => {
        setShowDesigns(design);
        setAnimateKey(prev => prev + 1);
    };

    return (
        <section id="designs" className='w-full md:h-screen py-12'>
            <div className='design-section-container'>
                <div className='subsection-heading'>
                    <AnimateOnScroll animation='fade-down' delay={400} >
                        <h1 className="text-secondary-100 text-vw-lg font-['Lato']">Designs</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation='fade-up' delay={400} >
                        <img src={subsectionIcon} className='h-[35px] md:h-[50px]'/>
                    </AnimateOnScroll>
                </div>
                <AnimateOnScroll animation='fade-in' delay={400}>
                    <div className='design-logos-container'>
                        <AnimateOnScroll animation='fade-in' delay={400}>
                            <img src={canvaIcon} alt="canva" className='h-[30px] md:h-[40px] w-[40px] hover:animate-logo-scale cursor-pointer' onClick={() => handleDesignChange("CANVA")}/>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation='fade-in' delay={600}>
                            <img src={figmaIcon} alt="figma" className='h-[30px] md:h-[40px] w-[40px] hover:animate-logo-scale cursor-pointer' onClick={() => handleDesignChange("FIGMA")}/>
                        </AnimateOnScroll>                   
                        <AnimateOnScroll animation='fade-in' delay={800}>
                            <img src={flutterIcon} alt="flutter" className='h-[30px] md:h-[40px] w-[50px] hover:animate-logo-scale cursor-pointer' onClick={() => handleDesignChange("FLUTTER")}/>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation='fade-in' delay={1000}>
                           <img src={reactIcon} alt="react" className='h-[30px] md:h-[40px] w-[60px] hover:animate-logo-scale cursor-pointer' onClick={() => handleDesignChange("REACT")}/>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>
                <div className='designs-container'>
                    <div key={animateKey} className='transition-all duration-500 ease-in-out animate-fade-in'>
                        { showDesigns == 'CANVA' ? <DesignsCarousel /> 
                        : <div className='bg-black bg-opacity-10 rounded-xl md:rounded-3xl flex justify-center items-center w-full h-full text-secondary-100'>In development 😊</div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DesignsSection