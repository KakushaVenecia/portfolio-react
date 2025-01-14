import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // Automatically hide the image after 3 seconds
    const timer = setTimeout(() => setShowImage(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
 

  {/* Left and Right Sections Below the Quote */}
  <div className="section">
    {/* Left Section (Bio) */}
    <div className="hero-left">
      <div className="hero-bio">
        <p className="typing-effect">
          I'm just a girl who loved working on tech products and interacting
          with clients at one point in time — enough to make me think:
          Wouldn't it be cool to learn how to turn thoughts into tangible products?
          <br></br>
          So, Here we are ! 
        </p>
      </div>
    </div>

    {/* Right Section (Image) */}
    <div className="hero-right">
      {showImage && (
        <div className="hero-image">
          <img src="./images/img2.jpg" alt="Placeholder" />
        </div>
      )}
      
    </div>

  </div>

  <button className='hire'>Hire Me</button>
   {/* Centered Quote */}
   <div className="hero-quote">
    <p>"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat."</p>
    <p className="quote-attribution">— Theodore Roosevelt</p>
  </div>
 
</div>

  );
}

export default HeroSection;
