import React from 'react'
import styles from './navbar.module.css'


const Navbar = () => {
    return (
    
        <header className={styles.header}>
            <ul className={styles.ul}> 
                <li className={styles.li}>Author</li>
                <li className={styles.li}>Add Author</li>
                <li className={styles.li}>Edit Author</li>
            </ul>
        </header>
    )
}

export default Navbar