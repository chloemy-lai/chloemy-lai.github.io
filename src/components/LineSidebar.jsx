import { useRef, useState, useCallback, useEffect } from 'react';
import './LineSidebar.css';

const FALLOFF_CURVES = {
  linear: p => p,
  smooth: p => p * p * (3 - 2 * p),
  sharp: p => p * p * p
};

const DEFAULT_ITEMS = [
  'Overview',
  'Components',
  'Animations',
  'Backgrounds',
  'Showcase',
  'Playground',
  'Templates',
  'Changelog',
  'Community',
  'Resources',
  'Documentation',
  'Support'
];

const LineSidebar = ({
  items = DEFAULT_ITEMS,
  accentColor = '#A855F7',
  textColor = '#c4c4c4',
  markerColor = '#6c6c6c',
  showIndex = true,
  showMarker = true,
  proximityRadius = 100,
  maxShift = 40,
  falloff = 'smooth',
  markerLength = 8,
  markerGap = 0,
  tickScale = 0.5,
  orientation = 'vertical',
  spread = false,
  minorTicks = 3,
  scaleTick = false,
  itemGap = 20,
  fontSize = 1.1,
  smoothing = 100,
  defaultActive = null,
  onItemClick,
  className = ''
}) => {
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(defaultActive);
  const smoothingRef = useRef(smoothing);
  const scaleTickRef = useRef(scaleTick);
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  // Make defaultActive controlled: update internal active when prop changes (e.g. from scroll/parent)
  useEffect(() => {
    if (defaultActive != null) {
      // oxlint-disable-next-line react/set-state-in-effect
      setActiveIndex(defaultActive);
    }
  }, [defaultActive]);
  const [minorTickInfos, setMinorTickInfos] = useState([]);
  const tickRefs = useRef([]);
  const tickIndicesRef = useRef([]);

  useEffect(() => {
    activeRef.current = activeIndex;
    smoothingRef.current = smoothing;
    scaleTickRef.current = scaleTick;
  }, [activeIndex, smoothing, scaleTick]);

  // Single rAF loop that eases every item's --effect toward its target using
  // frame-rate independent exponential smoothing, so color, shift and scale
  // all move together without staggering CSS transitions.
  const runFrame = useCallback(function runFrame(now) {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let moving = false;
    const items = itemRefs.current;
    for (let i = 0; i < items.length; i++) {
      const el = items[i];
      if (!el) continue;
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;
      el.style.setProperty('--effect', value.toFixed(4));
      if (!settled) moving = true;
    }

    if (scaleTickRef.current) {
      const tEls = tickRefs.current;
      const tIdxs = tickIndicesRef.current;
      const n = Math.min(tEls.length, tIdxs.length);
      for (let ti = 0; ti < n; ti++) {
        const tel = tEls[ti];
        if (!tel || !tel.isConnected) {
          tEls[ti] = null;
          continue;
        }
        const ii = tIdxs[ti] != null ? tIdxs[ti] : 0;
        const target = Math.max(targetsRef.current[ii] || 0, activeRef.current === ii ? 1 : 0);
        const cur = currentRef.current[`tick${ti}`] || 0;
        const next = cur + (target - cur) * k;
        const settled = Math.abs(target - next) < 0.0015;
        const value = settled ? target : next;
        currentRef.current[`tick${ti}`] = value;
        tel.style.setProperty('--effect', value.toFixed(4));
        if (!settled) moving = true;
      }
    }

    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
    }

    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback(
    e => {
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const isVertical = orientation === 'vertical';
      const pointerPos = isVertical ? (e.clientY - rect.top) : (e.clientX - rect.left);
      const ease = FALLOFF_CURVES[falloff] ?? FALLOFF_CURVES.linear;
      const items = itemRefs.current;
      targetsRef.current.length = items.length;
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (!el) continue;
        const center = isVertical
          ? (el.offsetTop + el.offsetHeight / 2)
          : (el.offsetLeft + el.offsetWidth / 2);
        const distance = Math.abs(pointerPos - center);
        targetsRef.current[i] = ease(Math.max(0, 1 - distance / proximityRadius));
      }
      startLoop();
    },
    [falloff, proximityRadius, startLoop, orientation]
  );

  const handlePointerLeave = useCallback(() => {
    const n = itemRefs.current.length;
    targetsRef.current = Array.from({ length: n }, () => 0);
    startLoop();
  }, [startLoop]);

  const updateMinorTicks = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const els = itemRefs.current.filter(Boolean);
    if (els.length < 2) {
      setMinorTickInfos([]);
      return;
    }
    const isVertical = orientation === 'vertical';
    const infos = [];
    const count = Math.max(0, minorTicks | 0);
    for (let i = 0; i < els.length - 1; i++) {
      const a = els[i];
      const b = els[i + 1];
      let start, end;
      if (isVertical) {
        start = a.offsetTop + a.offsetHeight;
        end = b.offsetTop;
      } else {
        start = a.offsetLeft + a.offsetWidth;
        end = b.offsetLeft;
      }
      const gap = end - start;
      for (let k = 1; k <= count; k++) {
        const p = start + (gap * k) / (count + 1);
        infos.push({ pos: p, index: i });
      }
    }
    setMinorTickInfos(infos);
  }, [orientation, minorTicks]);

  useEffect(() => {
    updateMinorTicks();
    const raf = requestAnimationFrame(updateMinorTicks);
    const ro = new ResizeObserver(updateMinorTicks);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener('resize', updateMinorTicks);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', updateMinorTicks);
    };
  }, [updateMinorTicks]);

  // Re-measure when the number of items changes
  useEffect(() => {
    requestAnimationFrame(updateMinorTicks);
  }, [items.length, updateMinorTicks]);

  useEffect(() => {
    tickIndicesRef.current = minorTickInfos.map((info) => info.index);
  }, [minorTickInfos]);

  const handleClick = useCallback(
    (index, label) => {
      setActiveIndex(index);
      onItemClick?.(index, label);
    },
    [onItemClick]
  );

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(
    () => () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    },
    []
  );

  return (
    <nav
      className={`line-sidebar line-sidebar--${orientation}${spread ? ' line-sidebar--spread' : ''}${showMarker ? ' line-sidebar--markers' : ''}${scaleTick ? ' line-sidebar--scale-tick' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--accent-color': accentColor,
        '--text-color': textColor,
        '--marker-color': markerColor,
        '--marker-length': `${markerLength}px`,
        '--marker-gap': `${markerGap}px`,
        '--tick-scale': tickScale,
        '--max-shift': `${maxShift}px`,
        '--item-gap': `${itemGap}px`,
        '--font-size': `${fontSize}rem`,
        '--smoothing': `${smoothing}ms`
      }}
    >
      <ul ref={listRef} className="line-sidebar__list" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        {items.map((label, index) => (
          <li
            key={`${label}-${index}`}
            ref={el => {
              itemRefs.current[index] = el;
            }}
            className="line-sidebar__item"
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => handleClick(index, label)}
          >
            {showMarker && <span className="line-sidebar__marker" aria-hidden="true" />}
            <span className="line-sidebar__label">
              {showIndex && <span className="line-sidebar__index">{String(index + 1).padStart(2, '0')}</span>}
              <span className="line-sidebar__text">{label}</span>
            </span>
            </li>
          ))}
          {showMarker && minorTickInfos.map((info, i) => (
            <span
              key={`mt-${i}`}
              ref={(el) => { tickRefs.current[i] = el; }}
              className="line-sidebar__minor-tick"
              style={orientation === 'vertical' ? { top: `${info.pos}px` } : { left: `${info.pos}px` }}
              aria-hidden="true"
            />
          ))}
        </ul>
    </nav>
  );
};

export default LineSidebar;
