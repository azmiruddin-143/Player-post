import React, { useContext } from 'react';
import { authContext } from '../../Components/Auth Provider setup/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader Component/Loader';
const PrivateRouts = ({children}) => {
    const {user,loader} = useContext(authContext)
    const location = useLocation()
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRouts;