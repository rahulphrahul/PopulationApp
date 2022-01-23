import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.10.0";
import LoginPage from "layouts/LoginPage/LoginPage";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import UserProfile from "views/UserProfile/UserProfile";
export default function App() {
  const [loggedIn, setLoggedin] = React.useState(undefined);
  const [notify, setNotification] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [userType, setUserType] = React.useState("");
  const [userdetails, setUserdetails] = React.useState([]);
  // console.log("fff:", loggedIn);
  useEffect(() => {
    if (loggedIn == undefined) {
      setLoggedin(JSON.parse(window.localStorage.getItem("LoggedIn")));
      setUserType(window.localStorage.getItem("UserType"));
      setUserdetails(JSON.parse(window.localStorage.getItem("userdetails")));
    }
  }, []);
  console.log("userdetails:", userdetails);
  useEffect(() => {
    // console.log("logedin changed:", loggedIn);
    if (loggedIn != undefined)
      window.localStorage.setItem("LoggedIn", JSON.stringify(loggedIn));
    else window.localStorage.setItem("LoggedIn", JSON.stringify(false));

    if (userType != "") window.localStorage.setItem("UserType", userType);
    if (userdetails != [])
      window.localStorage.setItem("userdetails", JSON.stringify(userdetails));
  }, [loggedIn, userType, userdetails]);
  const showNotification = () => {
    if (!bc) {
      setBC(true);
      setTimeout(function () {
        setBC(false);
      }, 3000);
    }
  };
  useEffect(() => {
    // console.log(userType);
    if (notify) {
      showNotification();
    }
  }, [notify, userType]);
  return (
    <>
      <Snackbar
        place="tr"
        color="success"
        icon={AddAlert}
        message={"Logged in as " + userType}
        open={bc}
        closeNotification={() => setBC(false)}
        close
      />
      <HashRouter>
        <>
          {loggedIn ? (
            <div>
              {(() => {
                return (
                  <Switch>
                    <Route path="/admin">
                      <Admin setLoggedin={setLoggedin} />
                    </Route>
                    <Route path="/user">
                      <UserProfile
                        userdetails={userdetails}
                        setLoggedin={setLoggedin}
                      />
                    </Route>
                    <Redirect from="/" to="/admin/dashboard" />
                  </Switch>
                );
              })()}
            </div>
          ) : (
            <Switch>
              <Route path="/login">
                <LoginPage
                  setLoggedin={setLoggedin}
                  setNotification={setNotification}
                  setUserType={setUserType}
                  setUserdetails={setUserdetails}
                />
              </Route>

              <Redirect from="/" to="/login" />
            </Switch>
          )}
        </>
      </HashRouter>
    </>
  );
}
