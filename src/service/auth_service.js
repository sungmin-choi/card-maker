import firebase from 'firebase';
import firebaseApp from './firebase';
class authService{
    login(parameter){
        const provider = new firebase.auth[`${parameter}AuthProvider`]();
        return firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
    }
    
}

export default authService;