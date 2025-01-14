import React, { useRef, useEffect } from 'react';
import './Content.css';
import { gsap } from 'gsap';

function Content() {
  let h1 = useRef(null);
  let pText = useRef(null);
  let nextLine = useRef(null);

  useEffect(() => {
    // Step 1: Create a GSAP timeline
    const timeline = gsap.timeline();

    // Step 2: Animate "The credit belongs to the man"
    timeline
      .from([h1.children], 1.5, {
        opacity: 0,
        y: "50%",
        skewY: 10,
        stagger: {
          amount: 0.5,
        },
        ease: "power3.out",
      })
      // Step 3: Animate "Theodore Roosevelt" attribution text
      .to(h1, 0.5, {
        opacity: 1,
        y: "0%",
      })
      .to(h1, 0.5, {
        opacity: 0,  // Fade out the h1 text
        y: "-20px",  // Slightly move it up
      })
      // Step 4: Animate pText into the position of h1, moving upwards to the same spot
      .to(pText, 1, {
        opacity: 1,
        y: "0%",
        ease: "power3.out",
      });

    // GSAP Typing Animation with width restriction
    gsap.fromTo(
      pText,
      { width: 0 },
      {
        width: "70%",
        duration: 3, // Typing speed
        ease: "steps(30)",
        delay: 1, // Delay for starting the typing
        onComplete: () => {
          // Once the first line is complete, reveal the next part of text
          gsap.to(nextLine, { opacity: 1, duration: 1 });
        }
      }
    );
  }, []);

  return (
    <div className="content">
      <h1 className="content-inner-bold" ref={el => (h1 = el)}>
        <div>"The credit belongs to the man who is actually in the arena"</div>
        <br />
        <div className="quote-attribution">— Theodore Roosevelt</div>
      </h1>

      {/* Rest of the content */}
      <p ref={el => (pText = el)}>
        I'm just a girl who loved working on tech products and interacting
        with clients at one point in time — enough to make me think:
        Wouldn't it be cool to learn how to turn a thought into a tangible product?
        <span ref={el => (nextLine = el)} className="next-line">So, here we are. Karibu!</span>
      </p>
    </div>
  );
}

export default Content;
