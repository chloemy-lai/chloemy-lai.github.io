import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <p>Contact:</p>
      <p>
        <a className="bluebutton" href="mailto:chloemy.lai@mail.utoronto.ca">
          Email: chloemy.lai@mail.utoronto.ca
        </a>
      </p>
      <p>
        <a
          className="bluebutton"
          href="https://www.linkedin.com/in/chloemylai/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="bluebutton"
          href="https://github.com/lll-cl13"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="bluebutton"
          href="https://www.instagram.com/lll.cl13"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
      <p>Copyright &copy; Chloe | Background picture captured at the Atlantic Ocean by me.</p>
    </div>
  );
}
