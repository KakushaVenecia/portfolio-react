import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        
        {/* Left Section - Story Begins */}
        <div className="hero-left">
          <h3>My Journey into Tech 🚀</h3>
          <p className="hero-story">
            My path into tech wasn’t conventional—I first encountered it while working as a Marketing Coordinator. Over time, I was promoted to Business Development Manager (BDM) at an insurtech startup, where I worked closely with a Product Manager, collecting user feedback after the MVP launch.
            <br /><br />
            One of my early responsibilities was refining the startup’s website and digital presence, which introduced me to <strong>UX/UI</strong>, <strong>frontend development</strong>, and <strong>product strategy</strong>. At first, I thought I simply had a keen eye for detail—but one Product Manager saw more. They encouraged me to consider <strong>product management</strong>, recognising my ability to connect user feedback, business needs, and product decisions.

As I continued pitching to businesses, engaging with early adopters, analysing feedback, and working with stakeholders, I realised I wasn’t just observing—I was actively shaping the product. Whether it was refining business propositions, collaborating with designers and developers, or advocating for user needs, I was honing the exact skills that drive great tech products.
            <br /><br />
            That’s when it hit me:  
            <strong>“Wouldn’t it be amazing to build the very products I helped shape?”</strong>
          </p>
        </div>

        {/* Right Section - Continuation of the Story + Github Link */}
        <div className="hero-right">
          <p className="hero-story">
            From 2019, this spark turned into a deliberate pursuit. I took intentional steps to transition into tech—learning to code, seeking hands-on experience, and surrounding myself with people who could accelerate my growth.
            <br /><br />
            I volunteered with a design strategist and business consultant, refining my product thinking and strategy skills. I contributed to tech startup ecosystem projects, deepened my understanding of software development, and continuously upskilled to bridge the gap between <strong>business needs and technical solutions</strong>.
            <br /><br />
            Today, I'm a <strong> full stack developer with a product mindset</strong>—someone who understands not just the <strong>code</strong>, but also the <strong>market, user needs, and the broader impact of technology</strong>. I'm eager to be part of a forward-thinking team where I can contribute my skills, learn, and grow.
          </p>
            {/* CTA Section */}
          <div className="hero-cta">
            <h3>Available for Collaboration 🚀</h3>
            <p>If you believe my skills and experience align with your team’s needs, feel free to reach out! I’d love to connect and explore how I can contribute to your projects.</p>
          </div>
        </div>
      </div>

    
      {/* YouTube Video Embed */}
      <div className="hero-video">
            <h3>A Product Development Internship Journey 🎥</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/hL4kyID49Ew?start=465" 
              title="Internship Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
      
    </div>
  );
}

export default HeroSection;
