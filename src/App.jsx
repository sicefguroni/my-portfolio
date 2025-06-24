import React from 'react';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import SkillsSection from './components/SkillsSection';
import DesignsSection from './components/DesignsSection';
import Footer from './components/FooterSection';

function App() {
  return (
    <div className="h-screen w-full overflow-auto no-scrollbar">
      <NavBar />
      <MainSection />
      <SkillsSection />
      <DesignsSection />
      <Footer />
    </div>
  );
}

export default App