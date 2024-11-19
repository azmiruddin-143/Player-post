import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase Setup/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setuser] = useState(null)
    const [loader, setLoader] = useState(true)

    // ggogle user//

    const googleRegister = () => {
       return signInWithPopup(auth, provider)
            
    }

    // create User//
    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User //

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    


    // update profile //

    const myProfileUpdate = (profileUpdate) => {
        return updateProfile(auth.currentUser, profileUpdate)
    }


// User Chek onAuthStateChanged //

useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser)
        setLoader(false)

    })
    return () => {
        unsubscibe()
    }
}, [])




    const userLogout = () =>{
       return signOut(auth)
    
    }



    // forget password//

    const passwordForget = (email) =>{
       return sendPasswordResetEmail(auth, email)
 
    }


    const authObjct = {
        person: "Azmir",
        registerUser,
        loginUser,
        user,
        setuser,
        myProfileUpdate,
        googleRegister,
        userLogout,
        loader,
        passwordForget
    }
    return (
        <div>
            <authContext.Provider value={authObjct}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;