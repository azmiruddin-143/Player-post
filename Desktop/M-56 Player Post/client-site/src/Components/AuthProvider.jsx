import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase setup/FirebaseAuth';

export const accountAuth = createContext()
const AuthProvider = ({ children }) => {


    // create User //

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user//

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const obj = {
        hlw : "Azmir",
        createUser,
        loginUser
    }
    return (
        <div>
            <accountAuth.Provider value={obj}>
                {children}
            </accountAuth.Provider>
        </div>
    );
};

export default AuthProvider;