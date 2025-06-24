import React from 'react';
import gmailIcon from '../assets/gmail-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import AnimateOnScroll from './AnimationOnScroll';

function Footer() {
    return(
        <footer id='contacts' className='footer-section'>
            <AnimateOnScroll animation='fade-in' delay={300}>
                <div className='footer-section-container'>
                    <AnimateOnScroll animation='fade-right' delay={400}>
                    <ul className='footer-links'>
                        <li className='footer-link'>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ceferinojumaoas29@gmail.com&su=Portfolio Inquiry&body=Hello! I'd like to discuss..." target="_blank" rel="noopener noreferrer">
                                <img src={gmailIcon} className='h-[32px]'/>
                                ceferinojumaoas29@gmail.com
                            </a>
                        </li>
                        <li className='footer-link'>
                            <a href="https://github.com/sicefguroni?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} className='h-[32px]'/>
                                Github Repositories
                            </a>
                        </li>
                    </ul>
                    </AnimateOnScroll>
                </div>
            </AnimateOnScroll>
        </footer>
    )
}

export default Footer