// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyANMKQdbs7k6qjMV5UtZ2U0WtG5298MM0Q",
  authDomain: "let-chat-web-app-c274a.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-c274a-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-c274a",
  storageBucket: "let-chat-web-app-c274a.appspot.com",
  messagingSenderId: "695015745026",
  appId: "1:695015745026:web:63d6dc60e808d08526291b"
};

// Initialize Firebase
     firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  console.log(user_name);
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }