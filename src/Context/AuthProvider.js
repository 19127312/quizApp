import { useEffect } from "react";
import { createContext, useState } from "react";
import { getProfile } from "../API/api";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, accessToken: null });
    useEffect(() => {
        if (auth.accessToken) {
            localStorage.setItem("accessToken", auth.accessToken);
        }
    }, [auth]);

    useEffect(() => {
        async function getProfileUser() {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                try {
                    const response = await getProfile(accessToken);
                    const { user } = response.data;
                    setAuth({ user, accessToken });
                } catch (error) {
                    localStorage.removeItem("accessToken");
                }
            }
        }
        getProfileUser()
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;