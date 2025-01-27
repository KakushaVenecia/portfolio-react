import React,  {useEffect, useRef } from 'react';
import { gsap } from "gsap";
import "./Ticker.css"

const Ticker = () => {
    const tickerRef = useRef(null);

    useEffect(() => {
        // Infinite scrolling animation for the ticker
        gsap.to(tickerRef.current, {
        x: "-100%", // Move left off-screen
        duration: 500, // Adjust duration for speed
        ease: "linear",
        repeat: -1, // Infinite loop
        });
    }, []);

    return (
        <div className="ticker-container">
      <div className="ticker-content" ref={tickerRef}>
      It is not the critic who counts; not the man 
      who points out how the strong man stumbles,
       or where the doer of deeds could have done them better. 
       The credit belongs to the man who is actually in the 
       arena, whose face is marred by dust and sweat and blood;
        who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails 
      while daring greatly, so that his place shall never be with those
       cold and timid souls who neither know victory nor defeat." - Theodore Roosevelt &nbsp;&nbsp;|&nbsp;&nbsp; Welcome to my portfolio.
        </div>
      </div>
    );
}

export default Ticker;

