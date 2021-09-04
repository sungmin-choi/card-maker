import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './loginPage.module.css';
import { useHistory } from 'react-router';

const LoginPage = ({authService}) =>{
    const history=useHistory();
    const gotoMakeCard=(userId)=>{
        history.push({pathname:'/makecard',
                       state:{id:userId},
                    });
    }
    const authLogin=(event)=>{
        authService.login(event.currentTarget.textContent)
        .then((result)=>gotoMakeCard(result.user.uid));
    }

    useEffect(()=>{
        authService
        .onAuthChange(user=>{
            user && gotoMakeCard(user.id);
        })
    });
    return(
            <div className={styles.loginform}>
                <Header/>
                <section className={styles.buttonForm}>
                <p className={styles.title2}>Login</p>
                <button className={styles.googleLogin} onClick={authLogin}>Google</button>
                <button className={styles.githubLogin} onClick={authLogin}>Github</button>
                </section>
                <Footer/>
            </div>
    );
}

export default LoginPage;