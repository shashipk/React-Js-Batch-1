# React Js Batch 1
 React Js + Redux + Firebase
 
 =============================================
 
 # Class Notes for React with FireBase
 
 import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDgbGTEUGeWQsKqGqWJM-9jTzBfIazoeJU",
    authDomain: "test-by-shashi-2.firebaseapp.com",
    databaseURL: "https://test-by-shashi-2.firebaseio.com",
    projectId: "test-by-shashi-2",
    storageBucket: "test-by-shashi-2.appspot.com",
    messagingSenderId: "1069279215732",
    appId: "1:1069279215732:web:a07f433a4bc23876d51121",
};

var fire = firebase.initializeApp(firebaseConfig);

const database = fire.database();

database.ref().set({
    name: "Shashi",
    age: 26,
    isSingle: false,
    stressLevel: 6,
    job: {
        title: "Software developer",
        company: "Google",
    },
    location: {
        city: "Noida",
        country: "India",
    },
});

database
    .ref("age")
    .remove()
    .then(() => {
        console.log("Data was removed");
    })
    .catch((e) => {
        console.log("Did not remove data", e);
    });
database.ref().on("value", (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Seattle",
});

database.ref().update({
    stressLevel: 9,
    "job/company": "Adobe",
    "location/city": "Seattle",
});

/*
database
    .ref()
    .remove()
    .then(() => {
        console.log("Data was removed");
    })
    .catch((e) => {
        console.log("Did not remove data", e);
    });
*/
/*
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
/*
const database = fire.database();

database
    .ref()
    .set({
        name: "Andrew Mead",
        age: 26,
        stressLevel: 6,
        job: {
            title: "Software developer",
            company: "Google",
        },
        location: {
            city: "Philadelphia",
            country: "United States",
        },
    })
    .then(() => {
        console.log("Data is saved!");
    })
    .catch((e) => {
        console.log("This failed.", e);
    });

database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Seattle",
});

database.ref().set("This is my data.");

//database.ref("age").set(27);
database.ref("location/city").set("New York");

database.ref("attributes").set({
    height: 73,
    weight: 150,
});

console.log("I made a request to change the data.");
*/
export default fire;
