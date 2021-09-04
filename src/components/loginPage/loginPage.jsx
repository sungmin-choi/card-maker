import React from 'react';
import styles from './loginPage.module.css';
const LoginPage = (props) =>{
    const googleLogin=()=>{
        
    }
    return(
        <div className={styles.main}>
            <div className={styles.loginform}>
                <header className={styles.header}>
                    <img className={styles.logo} src='/favicon.png' alt="logo" />
                    <p className={styles.title1}>Business Card Maker</p>
                </header>
                <section className={styles.buttonForm}>
                <p className={styles.title2}>Login</p>
                <button className={styles.googleLogin} onClick={googleLogin}>Google</button>
                <button className={styles.githubLogin}>Github</button>
                </section>
                <footer className={styles.footer}>Code your dream</footer>
            </div>

        </div>
    );
}

export default LoginPage;