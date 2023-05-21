import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
    
        <header className={styles.header}>
            <ul className={styles.ul}> 
                <li className={styles.li}><Link to={'/author'}>Author</Link></li>
                <li className={styles.li} ><Link to={'/addauthor'}>Add Author</Link></li>
                <li className={styles.li} ><Link to={'/editauthor'}>Edit Author</Link></li>
            </ul>
        </header>
    )
}

export default Navbar