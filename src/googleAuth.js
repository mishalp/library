import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";

const provider = new GoogleAuthProvider();
export const doGoogleSignup = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(auth.currentUser.uid);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const doSignOut = ()=>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
        
        console.log(error);
      });
}




