import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAsICmj1bJ3Mb5ZxYrMJVV3wq71fcqis6w",
    authDomain: "crwn-db-5ce93.firebaseapp.com",
    projectId: "crwn-db-5ce93",
    storageBucket: "crwn-db-5ce93.appspot.com",
    messagingSenderId: "964981204869",
    appId: "1:964981204869:web:729e22774e00ab927cc6ec",
    measurementId: "G-EM2PM8GNER"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })

        }
        catch (error) {
            console.log("Error creating the user profile", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
