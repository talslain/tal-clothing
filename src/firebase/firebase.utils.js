import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAbwM4-rIBvBTIVZjKCvOklwqFg3ICJbFM",
    authDomain: "tal-db-29446.firebaseapp.com",
    databaseURL: "https://tal-db-29446.firebaseio.com",
    projectId: "tal-db-29446",
    storageBucket: "tal-db-29446.appspot.com",
    messagingSenderId: "94092993027",
    appId: "1:94092993027:web:943dcf8b45e6e64025e436",
    measurementId: "G-TX688F8P52"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName, email, createAt, ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
