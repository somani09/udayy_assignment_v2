import React, {useState} from "react";
import ReactDom from "react-dom";
import Login from './Login';
import Main from './Main';
import ProtectedRoute from './protectedRoute';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/multitab/" exact={true}>
            <Login />
        </Route>
        <Route path="/multitab/home" exact={true}>
            <Main />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
