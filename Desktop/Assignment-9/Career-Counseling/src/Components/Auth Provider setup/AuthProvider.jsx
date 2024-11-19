import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase Setup/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setuser] = useState(null)

    // ggogle user//

    const googleRegister = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setuser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    // create User//
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User //

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User Chek onAuthStateChanged //

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)

        })
        return () => {
            unsubscibe()
        }
    }, [])


    // update profile //

    const myProfileUpdate = (profileUpdate) => {
        return updateProfile(auth.currentUser, profileUpdate)
    }




    const authObjct = {
        person: "Azmir",
        registerUser,
        loginUser,
        user,
        setuser,
        myProfileUpdate,
        googleRegister
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