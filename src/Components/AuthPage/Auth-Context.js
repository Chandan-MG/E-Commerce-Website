import React, { useState } from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login:(token)=>{}
})

export const AuthContextProvider = (props) =>{
    
    const [token, setToken] = useState(null);

    const loginHandler = (token) => {
        // console.log("token");
        setToken(token);
    }

    const contextValue = {
        token: token,
        isLoggedIn: !!token,
        login: loginHandler,
        // logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
