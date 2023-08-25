// import AuthHandler from "@/components/authHandler/AuthHandler";
// import AuthContext from "@/context/authContext/AuthContext";
// import { useEffect, useState } from "react";
// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const checkInLS = localStorage.getItem("isLoggedIn") === "1";
//     setIsAuthenticated(checkInLS);
//   }, []);
//   const onLogin = () => {
//     localStorage.setItem("isLoggedIn", 1);
//     setIsAuthenticated(true);
//   }
//   const onLogout = () => {
//     localStorage.setItem("isLoggedIn", 0);
//     setIsAuthenticated(false);
//   }
//   return (
//     <>
//       <AuthContext.Provider value={{ isLoggedIn: isAuthenticated, onLogin, onLogout }}>
//         <AuthHandler />
//       </AuthContext.Provider>
//     </>
//   );
// }
// export default App;

import db from "../utils/db.json";
import List from "@/components/list/List";
export default function () {
  const arr = db.authors;
  return (
    <List arr={arr} />
  );
}