import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [userId, setUserId] = useState('');

    return (
        <AuthContext.Provider value={{ userId, setUserId }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
