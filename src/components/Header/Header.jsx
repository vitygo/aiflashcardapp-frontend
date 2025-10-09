import styles from "./Header.module.css";
import { IoMenu } from "react-icons/io5";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isInAuth = location.pathname.startsWith("/auth");


  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <div className={styles.logo}><Link to='/'>FlashLogo</Link></div>
        <ul className={`${styles.headerMenu} ${menuOpen? styles.openMenu : ""}`}>
          <li className={styles.headerMenuElement}>Product</li>
          <li className={styles.headerMenuElement}>Product</li>
          <li className={styles.headerMenuElement}>Product</li>
          <li className={styles.headerMenuElement}>Product</li>
        </ul>
      </div>
      <div className={styles.rightHeader}>
        <div className={`${styles.buttons}`}  style={{display: isInAuth ? "none" : "flex" }}>
          <Link  state={{ mode: "login" }} to='auth' className={styles.headerButton}>login</Link>
          <Link  state={{ mode: "signup" }} to='auth' className={`${styles.headerButton} ${styles.signUpButton}`}>sign up</Link>
        </div>
        <button className={styles.hamburgerMenu} onClick={() => setMenuOpen(prev => !prev)}><IoMenu size="22px"/></button>
      </div>
    </header>
  );
}
