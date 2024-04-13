import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import Homepage from './Pages/Homepage';
import AuthFormPage from './Pages/AuthFormPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/auth" component={AuthFormPage} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
