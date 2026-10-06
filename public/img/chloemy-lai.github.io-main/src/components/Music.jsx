import { useEffect, useRef, useState } from 'react';
import { spotifyRows } from '../data/music';
import styles from './Music.module.css';

const FLAT_TRACKS = spotifyRows.flatMap((row, rowIndex) =>
  row.map((track, colIndex) => ({
    ...track,
    id: `track-${rowIndex}-${colIndex}`,
    rowIndex,
  })),
);

const ROWS = spotifyRows.map((_, rowIndex) =>
  FLAT_TRACKS.filter((t) => t.rowIndex === rowIndex),
);

export default function Music() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(() => new Set());

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const iframes = root.querySelectorAll('iframe');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.trackId;
            setVisible((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    iframes.forEach((iframe) => observer.observe(iframe));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="music" className={styles.section} ref={sectionRef}>
      <h1>
        Fav<span className="font-size-7"> Music</span>.
      </h1>

      {ROWS.map((row, rowIndex) => (
        <div className={styles.spotify} key={`row-${rowIndex}`}>
          {row.map((track) => {
            const shown = visible.has(track.id);
            return (
              <iframe
                key={track.id}
                data-testid="embed-iframe"
                data-track-id={track.id}
                className={`${styles.iframe} ${shown ? styles.iframeShow : ''}`}
                style={{ borderRadius: '5px', width: track.width, height: 150 }}
                src={track.src}
                width={track.width}
                height="150"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify track ${track.id}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
