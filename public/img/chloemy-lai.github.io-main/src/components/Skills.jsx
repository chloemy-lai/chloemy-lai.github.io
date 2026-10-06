import { useState } from 'react';
import { skills } from '../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div id="skills" className={styles.section}>
      <h1>
        My <span className="font-size-7">Skills</span>.
      </h1>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => {
          const itemClass = [
            styles.skillItem,
            'skill-item', // keep global class for blur observer
            activeIndex === index ? styles.skillItemActive : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={skill.title}
              className={itemClass}
              onClick={() => handleClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick(index);
              }}
            >
              <div className={styles.skillTitle}>{skill.title}</div>
              {skill.extras.map((extra, i) => {
                if (typeof extra === 'string') {
                  return (
                    <div key={`${skill.title}-e-${i}`} className={styles.skillExtra}>
                      {extra}
                    </div>
                  );
                }
                return (
                  <div key={`${skill.title}-e-${i}`} className={styles.skillExtra}>
                    <a className="bluebutton" href={extra.href}>
                      {extra.label}
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
