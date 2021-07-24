// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZf1_IOrBoBKQW5KTz4ZhhzLSkxUQeLpE",
    authDomain: "kwitter-c4e28.firebaseapp.com",
    databaseURL: "https://kwitter-c4e28-default-rtdb.firebaseio.com",
    projectId: "kwitter-c4e28",
    storageBucket: "kwitter-c4e28.appspot.com",
    messagingSenderId: "71525274060",
    appId: "1:71525274060:web:658a7b918ef2daa9004d69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
