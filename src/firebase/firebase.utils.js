import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLaoiH33AueSkXX-jv9p3bVLQQk84z-7Q",
  authDomain: "crwn-db-c0b22.firebaseapp.com",
  projectId: "crwn-db-c0b22",
  storageBucket: "crwn-db-c0b22.appspot.com",
  messagingSenderId: "822167521193",
  appId: "1:822167521193:web:7fbffdb857f97c90b3a6b8",
  measurementId: "G-31P631NBRC",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/**
 구글 가입 인증만 사용하겠다는 뜻이다.가입에는 트위터, 구글, 외에 다양한 것들이 있는데
 우리의 사이트에서는 구글만 사용한다. 
 */
