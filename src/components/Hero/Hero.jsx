import styles from './Hero.module.css'
import {Link} from 'react-router-dom'

export default function Hero(){
    return(
        <div className={styles.hero}>

            <h1 className={styles.heroTitle}>Generate flash card width AI</h1>
            <p className={styles.heroSubTitle}>learn the fastast way u can</p>
            <Link to='auth' className={styles.ctaButton}>start now</Link>
            <p className={styles.heroButtonSubTitle}>start free. no credits</p>
        </div>
    )
}