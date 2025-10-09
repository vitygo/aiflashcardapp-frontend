import styles from './MainLayout.module.css'
import {Outlet} from 'react-router-dom'

export default function MainLayout(){
    return(
        <div className={styles.mainLayout}>
            <Outlet/>
            this is main layout page
        </div>
    )
}