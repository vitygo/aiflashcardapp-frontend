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
      <div className={styles.DemoVideoContainer}>
        <CustomVideoPlayer />
      </div>
    </div>
  );
}

export function CustomVideoPlayer() {
  const baseName = "/random-words/";
  const videoFileName = "demovideo.mp4"; 
  const videoPath = "./demovideotest.mp4";

  return (
    <div className={styles.videoContainer}>

      <video
        className={styles.customVideo}
        width="100%" 
        height="auto"
        controls
        
      >
       
        <source src={videoPath} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
