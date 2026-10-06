import { useEffect } from 'react';

/**
 * Adds `.in-view` when elements enter the viewport (blur → clear).
 * Selector-based to match original DOM Observer behavior on h1, p, .skill-item.
 */
export function useInViewBlur(rootRef, selector = 'h1, p, .skill-item') {
  useEffect(() => {
    const root = rootRef?.current ?? document;
    const targets = root.querySelectorAll(selector);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootRef, selector]);
}
