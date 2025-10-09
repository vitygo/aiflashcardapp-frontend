import styles from './LandingPage.module.css'
import Hero from '../../components/Hero/Hero'

export default function LandingPage(){
    return(
        <div className={styles.landingPage}>
            <Hero/>
        </div>
    )
}