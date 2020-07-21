import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDh4SPUCwkmbyYCV2XcT9r-bcB5Sr8y3IY",
    authDomain: "major-project-d3513.firebaseapp.com",
    databaseURL: "https://major-project-d3513.firebaseio.com",
    projectId: "major-project-d3513",
    storageBucket: "major-project-d3513.appspot.com",
    messagingSenderId: "771977038259",
    appId: "1:771977038259:web:0ce8075c8c05f5d7ce63c6",
    measurementId: "G-VZRK6Y3Y19"
};

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const userProfileData = async (userAuth) => {
    if(!userAuth) return null;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        try{
            await userRef.set({
                displayName,
                email,
                isAdmin: false,
                cart: []
            });
        }catch (e) {
            console.log('Error creating user', e.message);
        }
    }

    return userRef;
};

export const updateCartDetails = async(userRef, cartData) => {
    if(!userRef) return;
    const snapShot = await userRef.get();
    if(!snapShot.exists) return;
    try{
        await userRef.update({
            cart: cartData
        });
    }catch (e) {
        console.log('Failed to update cart', e.message);
    }

};

export const inventoryDataFetch = () => {
    return firestore.collection('inventory');
};

export default firebase;