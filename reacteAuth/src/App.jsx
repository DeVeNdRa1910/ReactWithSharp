import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import Homepage from './Pages/Homepage';
import AuthFormPage from './Pages/AuthFormPage';
import { AuthContextProvider } from './store/AuthContext.jsx';

function App() {
  return (
    <AuthContextProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/auth" component={AuthFormPage} />
              <Route path="/profile" component={UserProfile} />
            </Switch>
          </Layout>
        </Router>
    </AuthContextProvider>
  );
}

export default App;
