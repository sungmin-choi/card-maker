import styles from './makeCardPage.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const MakeCardPage = ({authService}) =>{
    const history = useHistory();
    const onLogout=()=>{
        authService.logout();
    }
    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                history.push('/');
            }
        })
    });
    return(
        <section className={styles.main}>
            <button onClick={onLogout} className={styles.logout}>logout</button>
            <Header/>
            <section className={styles.designBlock}>
               <span> Design Block</span>
            </section>
            <Footer/>
        </section>
    );
}

export default MakeCardPage;