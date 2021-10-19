// Importing Default Authenticate Functions from Firebase
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthApp from "../Firebase/firebase.init";

// Initialize Authentication App
initializeAuthApp();

// Providing Google and Github Provider and Auth
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Calling useFirebase Function for further using
const useFirebase = () => {
    // All States for user, email, password, error, photo, name
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");

    // Function For Clearing Error 
    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 8000);
    };

    // Clear ERROR
    useEffect(() => {
        ClearError();
    }, [error]);

    // Sign In By Google
    const signInByGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Sign In By Github
    const signInByGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Sign In With Email
    const signInWithEmail = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // Sign Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
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
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // For Getting and Updating Display Name
    const handleName = e => {
        setName(e?.target?.value);
    }

    // For Getting Email
    const handleEmail = e => {
        setEmail(e?.target?.value);
    }

    // For Getting Password
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    // For getting Photo and Updating PhotoURL
    const handlePhoto = e => {
        setPhoto(e?.target?.value);
    }

    // Sign Up By Email and Password
    const signUpByEmailPassWord = () => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // Get and Set Name and Photo For email password login
    const setNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then((result) => { });
    }

    // Return the functions and states
    return {
        user,
        setUser,
        isLoading,
        signInByGoogle,
        logOut,
        signUpByEmailPassWord,
        signInWithEmail,
        signInByGithub,
        handleName,
        handleEmail,
        handlePassword,
        handlePhoto,
        setNameAndPhoto,
        setError,
        error

    }
}

export default useFirebase;
