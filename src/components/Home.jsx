import {Box, Button, Typography} from "@mui/material";
import {getAuth, signOut} from "firebase/auth";
import {app} from "../config/firebase";
import {useContext} from "react";
import {Context} from "../context/AuthContext";
import {SignIn} from "./SignIn";
import {HeaderBar} from "./global/HeaderBar";

export const Home = () => {

    const auth = getAuth(app);

    const {user} = useContext(Context)
    const handleSignOut = async () => {
        try {
            await signOut(auth)
            console.log(auth.currentUser)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Box>
            { user && (<Button onClick={handleSignOut}> Sign out </Button>)}
            {!user && (<SignIn/>)}
        </Box>
    )
}