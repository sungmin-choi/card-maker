
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import firebaseApp  from './firebase'


class AuthService {
 login(providerName) {
    let provider
    if (providerName === 'Google') provider = new GoogleAuthProvider();
    if (providerName === 'Github') provider = new GithubAuthProvider();
    const auth = getAuth(firebaseApp);
    return signInWithPopup(auth, provider);
  }

  onAuthChange(onUserChanged){
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
        onUserChanged(user);
      });

  }


  logout(){
    const auth = getAuth(firebaseApp);
    return signOut(auth);
  }
}

export default AuthService