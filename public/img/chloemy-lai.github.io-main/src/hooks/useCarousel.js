import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Experience carousel: center-snap active card, detail panel sync,
 * left/right controls, auto-scroll while section is in view.
 */
export function useCarousel(itemCount) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisibleRef = useRef(false);
  const autoScrollRef = useRef(null);
  const restartTimeoutRef = useRef(null);

  const setCardRef = useCallback((el, index) => {
    cardRefs.current[index] = el;
  }, []);

  const getActiveCardIndex = useCallback(() => {
    const container = containerRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!container || !cards.length) return 0;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, []);

  const scrollToCard = useCallback((index) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollPosition = cardCenter - containerCenter;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (!isVisibleRef.current) return;
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      const currentIndex = getActiveCardIndex();
      if (currentIndex < itemCount - 1) {
        scrollToCard(currentIndex + 1);
      } else {
        scrollToCard(0);
      }
    }, 2500);
  }, [getActiveCardIndex, itemCount, scrollToCard, stopAutoScroll]);

  const restartAutoScrollWithDelay = useCallback(
    (delay = 4000) => {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, delay);
    },
    [startAutoScroll],
  );

  const scrollLeft = useCallback(() => {
    const currentIndex = getActiveCardIndex();
    if (currentIndex > 0) scrollToCard(currentIndex - 1);
  }, [getActiveCardIndex, scrollToCard]);

  const scrollRight = useCallback(() => {
    const currentIndex = getActiveCardIndex();
    if (currentIndex < itemCount - 1) scrollToCard(currentIndex + 1);
  }, [getActiveCardIndex, itemCount, scrollToCard]);

  const onCardClick = useCallback(
    (index) => {
      stopAutoScroll();
      scrollToCard(index);
      restartAutoScrollWithDelay();
    },
    [restartAutoScrollWithDelay, scrollToCard, stopAutoScroll],
  );

  // Scroll listener → active index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const onScroll = () => {
      requestAnimationFrame(() => {
        setActiveIndex(getActiveCardIndex());
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    setActiveIndex(getActiveCardIndex());
    return () => container.removeEventListener('scroll', onScroll);
  }, [getActiveCardIndex, itemCount]);

  // IntersectionObserver for auto-scroll visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const experienceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisibleRef.current = true;
            startAutoScroll();
          } else {
            isVisibleRef.current = false;
            stopAutoScroll();
          }
        });
      },
      { threshold: 0.5 },
    );

    experienceObserver.observe(container);
    return () => {
      experienceObserver.disconnect();
      stopAutoScroll();
      clearTimeout(restartTimeoutRef.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  return {
    containerRef,
    setCardRef,
    activeIndex,
    scrollLeft,
    scrollRight,
    onCardClick,
    stopAutoScroll,
    restartAutoScrollWithDelay,
  };
}
