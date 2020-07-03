import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCd8ZfjDdGM_0d3Iz15HYqsmZk_bFMzSwo",
    authDomain: "react-with-firebase1.firebaseapp.com",
    databaseURL: "https://react-with-firebase1.firebaseio.com",
    projectId: "react-with-firebase1",
    storageBucket: "react-with-firebase1.appspot.com",
    messagingSenderId: "383498070691",
    appId: "1:383498070691:web:a2b24ea602cdee6c382d16",
    measurementId: "G-KQ81B2CFEP"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;