/*const firebaseConfig = {
    apiKey: "AIzaSyDK7nehDWZnkLceERabKM-8AaFkxOaf514",
    authDomain: "kwitter-web-app-project-f5570.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-project-f5570-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-project-f5570",
    storageBucket: "kwitter-web-app-project-f5570.appspot.com",
    messagingSenderId: "584790485670",
    appId: "1:584790485670:web:2531d7c83b5fab9ecda267",
    measurementId: "G-HR69TXCHWV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/

  var firebaseConfig = {
    apiKey: "AIzaSyDs5aHy0lebtBiOIpqEgyxe9tClcF7rcKA",
    authDomain: "lets-chat-ea91b.firebaseapp.com",
    databaseURL: "https://lets-chat-ea91b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ea91b",
    storageBucket: "lets-chat-ea91b.appspot.com",
    messagingSenderId: "265644702025",
    appId: "1:265644702025:web:d7f2dd079579e11242c298"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

username = localStorage.getItem("myusername");
document.getElementById("user").innerHTML = username;

function addroom(){
 room = document.getElementById("roomname").value;
 firebase.database().ref("/").child(room).update({purpose: "adding roomname"});
 localStorage.setItem("Myroomname", room);
 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("rooms").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class='roomname' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 //End code
 document.getElementById("rooms").innerHTML += row;
 });});}
getData();

function redirectToRoomName(Room_names){
    localStorage.setItem("Myroomnames", Room_names);
    window.location = "kwitter_page.html";     
}

function logout(){
    localStorage.removeItem('Myroomnames', Room_names);
    window.location = "index.html";
}