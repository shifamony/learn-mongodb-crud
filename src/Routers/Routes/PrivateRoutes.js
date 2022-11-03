import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
     <h2 className="text-5xl text-orange-600 font-bold">Loading............</h2>
    }
    if(user){
      return children;
    }
    return (
        <Navigate state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoutes;