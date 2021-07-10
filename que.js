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





// take a set in the queue

  function takeSet(){
  
    
    var user = firebase.auth().currentUser;
    
    
  // User is signed in.

  console.log(user.uid);
   nbr1 = document.getElementById("nbr").textContent;
   x =Number(nbr1);
   console.log(x);
   r=x+1
   res=r.toString();


  firebase.database().ref('users/'+user.uid).update({
    setnbr: res
    

  });

  firebase.database().ref('users/wmOfhq49GEbxIXh0Oh03V5A43Gn1').update({
    setnbr: res
  });
  //document.getElementById("nbr").innerText = res;
  console.log(r);
  
  console.log("firebase")

 window.location.replace("pro.html?set="+x);

}


//go to user profile
function gopro(){
    var user = firebase.auth().currentUser;
if(user){
    window.location.replace('pro.html');
}
else{
    window.location.replace('nonpro.html');

}
}




const dbRef = firebase.database().ref();
dbRef.child("users").child('wmOfhq49GEbxIXh0Oh03V5A43Gn1').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().setnbr);
    
    document.getElementById("nbr").innerText = snapshot.val().setnbr;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


function logOut(){
    firebase.auth().signOut();
}
