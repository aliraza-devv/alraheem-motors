import {Switch, Route, Redirect} from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Admin from './containers/Admin/Admin';
import Login from './containers/Login/Login';
import AddCustomer from './containers/AddCustomer/AddCustomer';
import PrivateRoute from './containers/PrivateRoute/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.scss';

function App() {
  const routes = (
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Admin} />
          <PrivateRoute path="/addCustomer" exact component={AddCustomer} />
          <Route path="/admin" exact component={Login} />
          <Route path="/" exact component={Landing} />
          <Redirect to="/" />
        </Switch>
  );

  return (
    <AuthProvider>
      <div className="App">
          {routes}
      </div>
    </AuthProvider>
  );
}

export default App;