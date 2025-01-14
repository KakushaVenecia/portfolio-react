// src/components/MainContent.js
import React from 'react';
import HeroSection from './HeroSection';
import Tabs from './Tabs';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';


function MainContent() {
  return (
    <main className="main-content">
    <HeroSection />
      <Tabs />
      <ContactForm />
      <SocialLinks />
    </main>
  );
}

export default MainContent;
