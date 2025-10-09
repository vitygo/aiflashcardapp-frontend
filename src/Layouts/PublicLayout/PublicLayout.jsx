import Header from '../../Components/Header/Header'
import styles from "./PublicLayout.module.css"
import { Outlet } from 'react-router-dom';


export default function PublicLayout({children}){
    return(
        <div className={styles.publicLayout}>
            <Header/>
            <main className="">
            <Outlet/>
            </main>
        </div>
    )
}