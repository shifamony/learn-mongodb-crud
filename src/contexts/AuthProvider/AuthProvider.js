import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //CREAT USER
    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //SIGN IN FUNCTION
   const userLogIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email,password)
   }
  

   //SIGNIN WITH GOOGLE
   const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);

   };


   //This function helps us to know whether users logged in or not
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       console.log('Users state changed',currentUser);
       setUser(currentUser);
       setLoading(false);
     });
     return () => {
       unsubscribe();
     }

   },[])

    const authInfo = {
       user,
       loading,
       createUser,
       userLogIn,
       providerLogin
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;