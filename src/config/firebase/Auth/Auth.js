import React, { useState, useEffect } from 'react';
import App from '../../firebase/index.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        App.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};