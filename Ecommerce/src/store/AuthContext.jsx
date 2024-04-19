import React, {useState} from "react";

const AuthContext =  React.createContext({

    token: '',
    isLoggedIn: false,
    login: () => {},
    logout: () => {}

})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    const loginHandler = (newToken) => {
        setToken(newToken);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const AuthCtx = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={AuthCtx}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext;