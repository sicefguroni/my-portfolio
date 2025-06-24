import React from 'react';
import canvaIcon from '../assets/black/canva-icon.svg';
import figmaIcon from '../assets/black/figma-icon.svg';
import flutterIcon from '../assets/black/flutter-icon.svg';
import reactIcon from '../assets/black/react-icon.svg';
import subsectionIcon from '../assets/subsection-icon.svg';
import AnimateOnScroll from './AnimationOnScroll';

function SkillsSection() {
    return (
        <section id="skills" className='px-8 py-12 md:px-32'>
            <div className='skills-container'>
                <div className='subsection-heading'>
                    <AnimateOnScroll animation='fade-down' delay={400}>
                        <h1 className="text-secondary-100 text-vw-lg font-['Lato']">What I Do</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation='fade-up' delay={400}>
                        <img src={subsectionIcon} className='h-[35px] md:h-[50px]'/>
                    </AnimateOnScroll>
                </div>
                <div className='skills-cards'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-10 justify-center'>
                        <AnimateOnScroll animation='fade-right' delay={500}>
                            <div className='skill-card'> 
                                <div className='skill-card-heading'>
                                    <img src={figmaIcon} alt="figma" className='h-[40px] md:h-[65px]' />
                                    <h1 className="font-['Poppins'] text-vw-sm font-bold">Web & App Design</h1>
                                </div>
                                <p className="font-['Lato'] text-vw-xs text-center">Creating user-friendly websites and apps with<br/>seamless experiences and modern aesthetics.</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation='fade-left' delay={500}>
                        <div className='skill-card'>
                            <div className='skill-card-heading'>
                                <img src={canvaIcon} alt="canva" className='h-[40px] md:h-[65px]'/>
                                <h1 className="font-['Poppins'] text-vw-sm font-bold">Creative Design</h1>
                            </div>
                            <p className="font-['Lato'] text-vw-xs text-center">Designing eye-catching graphics, social media <br/>content, and branding materials that stand out.</p>
                        </div>
                        </AnimateOnScroll>
                    </div>
                    
                    <div className='self-center'>
                        <AnimateOnScroll animation='fade-up' delay={400}>
                            <div className='skill-card'>
                                <div className='skill-card-heading'>
                                    <img src={reactIcon} alt="react" className='h-[40px] md:h-[65px]'/>
                                    <img src={flutterIcon} alt="flutter" className='h-[40px] md:h-[65px]'/>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <h1 className="font-['Poppins'] text-vw-sm font-bold">Web & App Development</h1>
                                    <p className="font-['Lato'] text-vw-xs text-center">From ideas to development, building websites <br/>and apps that are user-friendly.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SkillsSection