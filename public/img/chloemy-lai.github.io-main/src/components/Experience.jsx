import { experiences } from '../data/experiences';
import { useCarousel } from '../hooks/useCarousel';
import styles from './Experience.module.css';

export default function Experience() {
  const {
    containerRef,
    setCardRef,
    activeIndex,
    scrollLeft,
    scrollRight,
    onCardClick,
    stopAutoScroll,
    restartAutoScrollWithDelay,
  } = useCarousel(experiences.length);

  const active = experiences[activeIndex] ?? experiences[0];

  return (
    <div
      id="experience"
      className={styles.section}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={() => restartAutoScrollWithDelay(1000)}
      onTouchStart={stopAutoScroll}
      onTouchEnd={() => restartAutoScrollWithDelay(1000)}
    >
      <h1>
        My<span className="font-size-7"> Experiences</span>.
      </h1>

      <div className={styles.carousel}>
        <div className={styles.scrollContainer} ref={containerRef} id="scrollContainer">
          {experiences.map((item, index) => {
            const cardClass = [
              styles.card,
              item.cover ? styles.cardCover : '',
              index === activeIndex ? styles.cardActive : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={item.id}
                className={cardClass}
                data-id={item.id}
                ref={(el) => setCardRef(el, index)}
                onClick={() => onCardClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onCardClick(index);
                }}
              >
                {item.cover ? (
                  <h1>{item.title}</h1>
                ) : (
                  <img
                    src={item.image}
                    alt={item.alt || ''}
                    className={item.imageClass || undefined}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
          onClick={scrollLeft}
          aria-label="Previous experience"
        >
          &#10094;
        </button>
        <button
          type="button"
          className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
          onClick={scrollRight}
          aria-label="Next experience"
        >
          &#10095;
        </button>
      </div>

      <div className={styles.experienceDetails}>
        {experiences.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={item.id === active.id ? styles.detailActive : styles.detail}
          >
            <h3>{item.heading}</h3>
            {item.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
