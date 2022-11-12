import { script } from "./script";
import { doGoogleSignup, doSignOut } from './googleAuth'
import { getAuth, onAuthStateChanged } from "firebase/auth";


//add book 
document.getElementById('add-book-btn').addEventListener('click', script.addBook);



onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('in');
      document.getElementById('popup').classList.add('hide');
      document.getElementById('sign-out').addEventListener('click', doSignOut )
      document.getElementById('google-btn').removeEventListener('click', doGoogleSignup);
      document.getElementById('name').innerHTML = user.displayName
      // ...
    } else {
      // User is signed out
      console.log('out');
      document.getElementById('popup').classList.remove('hide');
      document.getElementById('sign-out').removeEventListener('click', doSignOut );
      document.getElementById('google-btn').addEventListener('click', doGoogleSignup );
      document.getElementById('name').innerHTML = ""
      // ...
    }
  });




