import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AuthContextType {
    user: any | null;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        // Check if there's a saved token in localStorage
        const savedToken = localStorage.getItem("authToken");

        if (savedToken) {
            setUser({ token: savedToken }); // Set the user object with the token
        }
    }, []);

    const login = (token: string) => {
        // Store the token in localStorage or sessionStorage
        localStorage.setItem("authToken", token);
        setUser({ token }); // Set user state with token (you may also decode it for user data)
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, setUser, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
