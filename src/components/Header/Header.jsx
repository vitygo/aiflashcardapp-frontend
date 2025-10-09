import styles from './Header.module.css'


export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.leftHeader}>
                <div className={styles.logo}>
                    FlashLogo
                </div>
                <ul className={styles.headerMenu}>
                    <li className={styles.headerMenuElement}>data</li>
                    <li className={styles.headerMenuElement}>data</li>
                    <li className={styles.headerMenuElement}>data</li>
                    <li className={styles.headerMenuElement}>data</li>
                </ul>
            </div>
            <div className={styles.rightHeader}>
                <div className={styles.buttons}>
                    <button className={styles.headerButton}>login</button>
                    <button className={styles.headerButton}>sign up</button>
                    <button className={styles.hamburgerMenu}>|||</button>
                </div>
            </div>

        </header>
    )
}