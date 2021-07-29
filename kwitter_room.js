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

user_name = localStorage.getItem("user_name"); 

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
} 

getData(); 

