// src/components/MainContent.js
import React from 'react';
import HeroSection from './HeroSection';
import Tabs from './Tabs';
import ContactForm from './ContactForm';


function MainContent() {
  return (
    <main className="main-content">
    <HeroSection />
      <Tabs />
      <ContactForm />
    </main>
  );
}

export default MainContent;
