import AuthContext from "@/context/authContext/AuthContext";
import { useContext } from "react";

export default function Login() {
    const authCtx = useContext(AuthContext);
    return (
        <>
            <h1>This is Login page</h1>
            <button onClick={authCtx.onLogin}>Login</button>
        </>
    );
}