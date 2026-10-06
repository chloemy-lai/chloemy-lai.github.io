/**
 * Count-up animation helper (from original script.js).
 * Sets element text from 0 → target over `duration` ms.
 */
export function animateCount(el, target, duration = 1500) {
  if (!el) return;
  const start = 0;
  const range = target - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + range * elapsed);
    el.innerText = value.toLocaleString();

    if (elapsed < 1) {
      requestAnimationFrame(step);
    } else {
      el.innerText = Number(target).toLocaleString();
    }
  }

  requestAnimationFrame(step);
}

export function formatCount(value) {
  if (value == null || Number.isNaN(value)) return 'Loading...';
  return Number(value).toLocaleString();
}
