import styles from './Header.module.css';
import { useHeaderScroll } from '../hooks/useHeaderScroll';

const NAV = [
  { href: '#', label: 'Home' },
  { href: '#experience', label: 'Experiences' },
  { href: '#skills', label: 'Skills' },
  { href: '#music', label: 'Music' },
  { href: '#footer', label: 'Contacts' },
];

export default function Header() {
  const { shrink, hidden } = useHeaderScroll();

  const className = [
    styles.header,
    shrink ? styles.shrink : '',
    hidden ? styles.hide : styles.show,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header id="site-header" className={className}>
      <div className={styles.topBar}>
        <a href="#" className={styles.logoLink}>
          <img className={styles.logo} src="/img/IMG_4793.JPG" alt="Logo" />
        </a>
        <nav>
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
