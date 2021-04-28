/*const Config = {
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
  firebase.initializeApp(Config);*/

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
  

  user_name = localStorage.getItem("myusername");
  room_name = localStorage.getItem("Myroomname");
  function send(){
      message = document.getElementById("sending").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: message,
          likes: 0
      });
  }
  function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
             childData = childSnapshot.val(); 
             if(childKey != "purpose") { 
                 firebase_message_id = childKey; 
                 message_data = childData; 
                 names = message_data['name'];
                 messages = message_data['message'];
                 like = message_data['likes'];
                 name_with_tag = "<h4>"+ names + "</h4>";
                 message_with_tag = "<h4 class='message_h4'>" + messages + "</h4>";
                 like_button = "<button class='btn btn-danger' id="+ firebase_message_id + " value = " + like + " onclick ='updateLike(this.id)'>";
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+"</span></button><hr>";

                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML += row;
     }
     });
     });
     } 
     
     getData();

     function updateLike(message_id){
         button_id = message_id;
         like = document.getElementById(button_id).value;
         updated_likes = Number(like) + 1;

         firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes
         });
     }

     function logout(){
        localStorage.removeItem("myUsername");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
     }