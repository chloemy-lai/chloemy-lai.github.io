import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div>
      <h1 className={styles.title}>Chloe&apos;s Home Page</h1>
      <h1>
        Hi,  My name is
        <span className="font-size-7"> Chloe M.Y. Lai</span>
      </h1>
      <h3>BBA &amp; BSc Student at the University of Toronto Scarborough</h3>
    </div>
  );
}
