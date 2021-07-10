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






  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      const dbRef = firebase.database().ref();
      dbRef.child("users").child(uid).get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().setnbr);
          console.log(snapshot.val().name);
          const x = snapshot.val().setnbr
          console.log(x);
          document.getElementById("username").innerText = snapshot.val().name;
          document.getElementById("usernbr").innerText = x;
          document.getElementById("userid").innerText = snapshot.val().setnbr;
           const r =Number(x);
           const people = r - 1;
           var tps = people * 10;
           let time = tps * 60;
           //document.getElementById("tps").innerText = tps.toString();
           setInterval(updateCountDown, 1000);
           document.getElementById("nbrpeople").innerText = people.toString();

           function updateCountDown(){
            const min = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 10? '0'+seconds : seconds;
            document.getElementById("tps").innerText=`${min}:${seconds}`;
            time--;
            tps--;
      
        }

           


        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      // ...
    }else {
      // User is signed out
      // ...
      console.log('User is signed out')
    }
  });





  











function logOut(){
    firebase.auth().signOut();
}