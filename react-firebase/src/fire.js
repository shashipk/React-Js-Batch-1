import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCd8ZfjDdGM_0d3Iz15HYqsmZk_bFMzSwo",
    authDomain: "react-with-firebase1.firebaseapp.com",
    databaseURL: "https://react-with-firebase1.firebaseio.com",
    projectId: "react-with-firebase1",
    storageBucket: "react-with-firebase1.appspot.com",
    messagingSenderId: "383498070691",
    appId: "1:383498070691:web:a2b24ea602cdee6c382d16",
    measurementId: "G-KQ81B2CFEP",
};
var fire = firebase.initializeApp(firebaseConfig);

const database = fire.database();

database
    .ref()
    .set({
        name: "Shashi",
        age: 26,
        isSingle: false,
        location: {
            city: "Noida",
            country: "India",
        },
    })
    .then(() => {
        console.log("Data is saved!");
    })
    .catch((e) => {
        console.log("This failed.", e);
    });

// database.ref().set('This is my data.');

database.ref("age").set(27);
database.ref("location/city").set("New York");

database.ref("attributes").set({
    height: 73,
    weight: 150,
});

console.log("I made a request to change the data.");
export default fire;