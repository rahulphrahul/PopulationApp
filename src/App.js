import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import LoginPage from "layouts/LoginPage/LoginPage";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";

export default function App() {
  const [loggedIn, setLoggedin] = React.useState(false);
  const [notify, setNotification] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const showNotification = () => {
    if (!bc) {
      setBC(true);
      setTimeout(function () {
        setBC(false);
      }, 3000);
    }
  };

  if (notify) {
    showNotification();
    setNotification(false);
  }
  return (
    <>
      <Snackbar
        place="tr"
        color="success"
        icon={AddAlert}
        message="Logged in as Admin"
        open={bc}
        closeNotification={() => setBC(false)}
        close
      />
      <BrowserRouter>
        <>
          {loggedIn ? (
            <Switch>
              <Route path="/admin" component={Admin}></Route>
              <Redirect from="/" to="/admin/dashboard" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login">
                <LoginPage
                  setLoggedin={setLoggedin}
                  setNotification={setNotification}
                />
              </Route>

              <Redirect from="/" to="/login" />
            </Switch>
          )}
        </>
      </BrowserRouter>
    </>
  );
}
