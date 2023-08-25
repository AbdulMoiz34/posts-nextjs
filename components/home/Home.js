import AuthContext from "@/context/authContext/AuthContext";
import { useContext } from "react";

export default function Home() {
    const inLineStyle = { display: "flex", justifyContent: "center", listStyle: "none", gap: "20px", margin: "20px 0 0 0" };
    const authCtx = useContext(AuthContext);
    return (
        <>
            <div>
                <h1>This is my home page</h1>
                <nav>
                    <ul style={inLineStyle}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                    </ul>
                </nav>
            </div>
            <button onClick={authCtx.onLogout}>Logout</button>
        </>
    );
}