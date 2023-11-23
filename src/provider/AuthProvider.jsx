import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebse/firebase.config";
import useAxiosPublic from './../components/hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user signout
    const signOutUser = () => {
        signOut(auth);
    }

    // signin with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    });
            } else {
                localStorage.removeItem('access-token');
            }
        });
        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;