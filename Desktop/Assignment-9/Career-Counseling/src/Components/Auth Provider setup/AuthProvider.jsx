import React, { createContext } from 'react';

export const authContext = createContext()
const AuthProvider = ({children}) => {

    const authObjct = {
        person: "Azmir"
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