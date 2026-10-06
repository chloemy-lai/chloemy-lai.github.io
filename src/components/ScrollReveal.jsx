import { useLayoutEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'top 50%',
  wordAnimationEnd = 'top 45%',
  blurStart = 'top bottom',
  blurEnd = 'top 50%'
}) => {
  const containerRef = useRef(null);

  const isString = typeof children === 'string';
  const splitText = useMemo(() => {
    if (!isString) return children;
    const text = children;
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isString]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const triggers = [];

    if (baseRotation) {
      const rotTween = gsap.fromTo(
        el,
        { transformOrigin: '50% 50%', rotate: baseRotation, transform: 'translateZ(0)' },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 70%',
            end: rotationEnd,
            scrub: true
          }
        }
      );
      if (rotTween.scrollTrigger) triggers.push(rotTween.scrollTrigger);
    }

    const wordElements = el.querySelectorAll('.word');
    const textContainer = el.querySelector('.scroll-reveal-text');

    // If we have split words, animate them individually.
    // Otherwise (e.g. GradientText), animate the whole text block.
    const opacityTargets = wordElements.length > 0 ? wordElements : [textContainer];
    const blurTargets = wordElements.length > 0 ? wordElements : [textContainer];

    const opTween = gsap.fromTo(
      opacityTargets,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: wordElements.length > 0 ? 0.05 : 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 72%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );
    if (opTween.scrollTrigger) triggers.push(opTween.scrollTrigger);

    if (enableBlur) {
      const blurTween = gsap.fromTo(
        blurTargets,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: wordElements.length > 0 ? 0.05 : 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: blurStart,
            end: blurEnd,
            scrub: true
          }
        }
      );
      if (blurTween.scrollTrigger) triggers.push(blurTween.scrollTrigger);
    }

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, blurStart, blurEnd]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
