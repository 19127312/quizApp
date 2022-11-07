import { useEffect } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const user = localStorage.getItem("user");
        if (user) {
            return { user: JSON.parse(user) };

        }
        return { user: null };
    });
    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem("user"));
        // if (user) {
        //     setAuth({ user });
        // }
        auth.user && localStorage.setItem("user", JSON.stringify(auth.user));
    }, [auth]);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;