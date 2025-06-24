import React, { useState } from 'react';
import webIcon from '../assets/web-icon.svg';
import AnimateOnScroll from './AnimationOnScroll';
import burgerIcon from '../assets/burger-icon.svg';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleIconHover = () => {
    setIsSpinning(true);
    // Reset the animation after it completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 1500); // 1.5 seconds to match the animation duration
  };

  return (
    <nav className='navbar animate-fade-down transition-all duration-400'>
      <div className='navbar-container'>
        <div className='navbar-logo' onMouseEnter={handleIconHover}>
          <img 
            src={webIcon} 
            alt='sev-logo' 
            className={`navbar-logo-icon ${isSpinning ? 'animate-spin-horizontal' : ''}`}
          />
          <h1 className='navbar-logo-text text-vw-xs'>SEV</h1>
        </div>
        <ul className='navbar-links'>
          <li><a href='#skills' className='navbar-link text-vw-xs'>Skills</a></li>
          <li><a href='#designs' className='navbar-link text-vw-xs'>Designs</a></li>
          <li><a href='#contacts' className='navbar-link text-vw-xs'>Contacts</a></li>
        </ul>
        <button className={`mobile-menu-icon ${isMobileMenuOpen ? 'bg-primary-100' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={burgerIcon} />
        </button>
      </div>
      <div className={`
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
      `}>
        <div className='mobile-menu'>
          <ul className='mobile-menu-links'>
            <li><a href='#skills' onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href='#designs' onClick={() => setIsMobileMenuOpen(false)}>Designs</a></li>
            <li><a href='#contacts'onClick={() => setIsMobileMenuOpen(false)}>Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;