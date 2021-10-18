import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthApp from "../Firebase/firebase.init";

initializeAuthApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInByGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });
    }

    // Observer for User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        user,
        signInByGoogle,
        logOut

    }
}

export default useFirebase;
