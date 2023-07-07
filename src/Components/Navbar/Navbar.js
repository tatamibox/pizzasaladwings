import styles from './Navbar.module.css'
import React from 'react'
import Instagram from '../../assets/icons/1384031.png'
const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <header className={styles.header}>
                PIZZASALADWINGS.
            </header>
            <p className={styles.subHeader}>a portfolio of memories
                for eric & tanya</p>
            <div className={styles.socialMedia}>
                <a href="instagram.com/pizzasaladwings"><img src={Instagram}></img></a>
            </div>
        </div>
    )


}

export default Navbar