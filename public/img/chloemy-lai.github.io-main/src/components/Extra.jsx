import { formatCount } from '../utils/animateCount';
import styles from './Extra.module.css';

export default function Extra() {
  return (
    <div id="experienceExtra" className={styles.section}>
      <h1>
        <span className="font-size-7"> Extra</span>.
      </h1>

      <div className={styles.extraRow}>
        <div className={styles.left}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_q9B489ffY8?si=7ardOYH9N_issP21"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <p>
            <a href="https://www.youtube.com/@ChenZhuoxuanMusic">
              Solo Moderator for Youtube Fans Channel
            </a>
          </p>
        </div>

        <div className={styles.right}>
          <p>Developed and refined my skills in video editing, storytelling, and translating</p>
          <p>
            Managed and upload a high volume of past and new files daily with{' '}
            <span className="accent-tan">efficiency and accuracy</span> through content calendar
          </p>
          <p>
            Analyzed and developed{' '}
            <span className="accent-tan">
              deep familiarity with video performance metrics and platform algorithmy
            </span>
            , using insights to maximize content effectiveness
          </p>
          <h1>
            <b>
              <u>Acheiving</u>
            </b>
            <span className="font-size-4"> (real time)</span>
          </h1>
          <div id="stats-container">
            <p>
              Subscribers:
              <span className="font-size-6">
                {' '}
                <u>
                  <span id="sub-count">Loading...</span>
                </u>
              </span>{' '}
              (
              <i>
                <span className="font-size-5 accent-tan">347%</span>
              </i>{' '}
              more than previous year)
            </p>
            <p>
              Total Views:
              <span className="font-size-6">
                {' '}
                <u>
                  <span id="view-count">Loading...</span>
                </u>
              </span>{' '}
              (
              <i>
                <span className="font-size-5 accent-tan">999%</span>
              </i>{' '}
              more than previous year)
            </p>
          </div>
        </div>
      </div>

      <div className={styles.scrollText}>
        <p>Yay!</p>
      </div>
    </div>
  );
}
