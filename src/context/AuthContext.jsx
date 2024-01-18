import {createContext, useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {app} from "../config/firebase";

export const Context = createContext();

export const AuthContext = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            return () => unsubscribe();
        })
    }, [])

    return (
        <Context.Provider value={{user, setUser}}>
            {!loading && children}
        </Context.Provider>
    )
}