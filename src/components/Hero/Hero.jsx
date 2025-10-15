import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <p className={styles.badge}>Learn 5x Faster</p>
      <h1 className={styles.heroTitle}>
        Generate flash card <span>width AI</span>{" "}
      </h1>
      <p className={styles.heroSubTitle}>
        Transform your notes into study sets automatically.
      </p>
      <Link to="auth" className={styles.ctaButton}>
        start now
      </Link>
      <p className={styles.heroButtonSubTitle}>Start free. No card needed.</p>
      <div className={styles.DemoVideoContainer}></div>
    </div>
  );
}
