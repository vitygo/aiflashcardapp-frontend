import styles from "./Header.module.css";
import { IoMenu } from "react-icons/io5";
import {useState} from 'react'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <div className={styles.logo}>FlashLogo</div>
        <ul className={`${styles.headerMenu} ${menuOpen? styles.openMenu : ""}`}>
          <li className={styles.headerMenuElement}>data</li>
          <li className={styles.headerMenuElement}>data</li>
          <li className={styles.headerMenuElement}>data</li>
          <li className={styles.headerMenuElement}>data</li>
        </ul>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.buttons}>
          <button className={styles.headerButton}>login</button>
          <button className={`${styles.headerButton} ${styles.signUpButton}`}>sign up</button>
        </div>
        <button className={styles.hamburgerMenu} onClick={() => setMenuOpen(prev => !prev)}><IoMenu size="22px"/></button>
      </div>
    </header>
  );
}
