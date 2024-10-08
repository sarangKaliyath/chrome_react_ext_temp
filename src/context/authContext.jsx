import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("");

    useEffect(() => {
        const tok = JSON.parse(window.localStorage.getItem("token"));
        setToken(tok);
    }, [])

    const logout = () => {
        setToken(false);
    }

    return (
        <AuthContext.Provider value={{ token, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext };