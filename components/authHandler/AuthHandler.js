import AuthContext from "@/context/authContext/AuthContext";
import { useContext } from "react";
import Home from "../home/Home";
import Login from "../login/Login";

export default function AuthHandler() {
    const authCtx = useContext(AuthContext);
    return (
        <>
            {authCtx.isLoggedIn ? <Home /> : <Login />}
        </>
    );
}