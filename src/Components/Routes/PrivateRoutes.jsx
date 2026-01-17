import React, { use } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user, loading } = use(AuthContext);

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    }
    if(!user){
        return <Navigate to='/signin' replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;