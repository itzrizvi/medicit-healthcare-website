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

initializeAuthApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");

    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    // clear error
    useEffect(() => {
        ClearError();
    }, [error]);


    const signInByGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const signInByGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signInWithEmail = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

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


    const handleName = e => {
        setName(e?.target?.value);
    }
    const handleEmail = e => {
        setEmail(e?.target?.value);
    }
    const handlePassword = e => {
        setPassword(e?.target?.value);
    }

    const handlePhoto = e => {
        setPhoto(e?.target?.value);
    }

    const signUpByEmailPassWord = () => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const setNameAndPhoto = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then((result) => { });
    }



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
        setNameAndPhoto

    }
}

export default useFirebase;
