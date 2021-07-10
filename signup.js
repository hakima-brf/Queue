







  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKAS1n4ak6fu4vRQRopFJlMTZ8ymGDSaM",
    authDomain: "resume-4847d.firebaseapp.com",
    databaseURL: "https://resume-4847d-default-rtdb.firebaseio.com",
    projectId: "resume-4847d",
    storageBucket: "resume-4847d.appspot.com",
    messagingSenderId: "217401544234",
    appId: "1:217401544234:web:23e0d14562a2fa908cfd53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  





const auth = firebase.auth();




firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    window.location.replace("que.html");
    // ...
  } else {
    // User is signed out
    // ...
  }
});







function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase.auth().createUserWithEmailAndPassword(email.value,password.value).then((userCredential) =>{
    console.log("first step");
  firebase.database().ref('users/'+userCredential.user.uid).set({
    name: document.getElementById("name1").value,
    setnbr: "none please take a set"
  });
  console.log("second step");
});
  

  
}
  


function signIn(){

  var email = document.getElementById("email1");
  var password = document.getElementById("password1");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  
}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});