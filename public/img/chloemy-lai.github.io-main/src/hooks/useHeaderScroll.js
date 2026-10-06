import { useEffect, useState } from 'react';

export function useHeaderScroll() {
  const [shrink, setShrink] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;

      setShrink(currentScroll > 50);

      // Show at very top
      if (currentScroll <= 10) {
        setHidden(false);
        lastScroll = currentScroll;
        return;
      }

      // Hide when scrolling down
      if (currentScroll > lastScroll) {
        setHidden(true);
      } else {
        // Show when scrolling up
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { shrink, hidden };
}