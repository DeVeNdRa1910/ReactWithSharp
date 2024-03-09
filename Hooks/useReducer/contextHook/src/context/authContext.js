import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: isLoggedIn,
        onLogout: ()=>{},
        onlogin: (email, college, password)=>{}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if(storedUserLoggedInInformation === '1'){
          setIsLoggedIn(true);
        }
    } , []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn' , 1);
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onlogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;