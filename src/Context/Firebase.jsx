import React,{useContext,useEffect,useState,createContext} from "react";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from '@mui/material';


export const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyBnkQOQCll8vnhHPIC6WdcP6H1i7YNXCT8",
    authDomain: "tastybites-96ddf.firebaseapp.com",
    projectId: "tastybites-96ddf",
    storageBucket: "tastybites-96ddf.appspot.com",
    messagingSenderId: "514699544077",
    appId: "1:514699544077:web:6e0441f38e746e5e8fb744"
  };

const firebaseApp=initializeApp(firebaseConfig);

const auth=getAuth(firebaseApp);
export const useFirebase=()=>useContext(FirebaseContext);


export const FirebaseProvider=(props)=>{
    
    const [user,setuser]=useState(null);
    //create an user

    const singupwithemailandpassword=(email,password)=>{
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log(user);
            toast.success("User Created Successfully");
          

        }).catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(errorCode,errorMessage);
            toast.error(errorMessage);
        })
    }

//logging ing the user
    const loginwithPasswordAndUsername = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("User Login Successfully");
            console.log("user logged in")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error(errorMessage);
          });
      };

//check if user is logged in
useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log("user is logged in");
            setuser(user);
        }else{
            console.log("user is logged out");
        }
    })

})
//logout user
const logout=()=>{
    signOut(auth).then(()=>{
        toast.success("User Logged Out");
    }).catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        console.log(errorCode,errorMessage);
        toast.error(errorMessage);
    })
}

//chceck logged in
const isLoggedin=user ? true:false;

//const reset password
const resetPassword=(email)=>{
    sendPasswordResetEmail(auth,email).then(()=>{
        toast.success("Reset Password Link Sent");
    }).catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        console.log(errorCode,errorMessage);
        toast.error(errorMessage);
    })
}






    return(
        <FirebaseContext.Provider value={{singupwithemailandpassword,loginwithPasswordAndUsername,logout,isLoggedin,resetPassword}}>
            {props.children}
        </FirebaseContext.Provider>

    )
}


