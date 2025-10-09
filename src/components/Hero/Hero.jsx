import styles from './Hero.module.css'

export default function Hero(){
    return(
        <div className={styles.hero}>

            <h1 className={styles.heroTitle}>Generate flash card width AI</h1>
            <p className={styles.heroSubTitle}>learn the fastast way u can</p>
            <button className={styles.ctaButton}>start now</button>
            <p className={styles.heroButtonSubTitle}>start free. no credits</p>
        </div>
    )
}