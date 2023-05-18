import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';


const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };


      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
      };


      const logOut = () => {
        setLoading(true)
        return signOut(auth)
          
      };


      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
          
          setLoading(false)
          setUser(loggedUser);
        
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const AuthInfo ={registerUser, user, googleProvider, loading, setUser, logOut, signIn }


    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider