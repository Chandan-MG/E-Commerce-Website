import React, { useState } from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login:(token)=>{},
    email: '',
    userEmail: ''
})

export const AuthContextProvider = (props) =>{
    
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');

    let userEmail = email;

    const loginHandler = (token) => {
        // console.log("token");
        setToken(token);
    }

    const emailHandler=(email)=>{
        setEmail(email);
        // userEmail=email;
    }

    const contextValue = {
        token: token,
        isLoggedIn: !!token,
        login: loginHandler,
        email: emailHandler,
        userEmail: userEmail
        // logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
