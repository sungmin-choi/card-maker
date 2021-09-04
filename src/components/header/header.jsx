import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return(
        <header className={styles.header}>
        <img className={styles.logo} src='/favicon.png' alt="logo" />
        <p className={styles.title}>Business Card Maker</p>
        </header>
    );
}

export default Header;