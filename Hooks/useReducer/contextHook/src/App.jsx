import React, { useState , useContext } from 'react';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './context/authContext';


function App() {
  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
    </AuthContextProvider>
  );
}

export default App;
