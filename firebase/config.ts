// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged } from "firebase/auth";
import { FIREBASE_CONFIG } from "@/config/default";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

export const firebase_app  = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApps()[0];;
export const auth = getAuth(firebase_app);
export const provider = new GoogleAuthProvider();    
export const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // if (credential) {
                //     const token = credential.accessToken;
                //     const user = result.user;
                //     console.log(token);
                //     console.log(user);
                // }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
          console.log(uid);
        } else {
          // User is signed out
          // ...
          console.log('user is signed out');
        }
      });
export const signOut = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
        console.log('sign out successful');
      }).catch((error) => {
        // An error happened.
        console.log(`sign out failed: ${error}`);
      });
}


