import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import LoginPage from "layouts/LoginPage/LoginPage";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import StaffsLayout from "layouts/StaffsLayout";
import HodLayout from "layouts/HodLayout";
import UserProfileLayout from "layouts/UserProfileLayout";

export default function App() {
  const [loggedIn, setLoggedin] = React.useState(false);
  const [notify, setNotification] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [userType, setUserType] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
  const [staff, setStaff] = React.useState(false);
  const [hod, setHod] = React.useState(false);
  const [userdetails, setUserdetails] = React.useState([]);
  const showNotification = () => {
    if (!bc) {
      setBC(true);
      setTimeout(function () {
        setBC(false);
      }, 3000);
    }
  };
  useEffect(() => {
    if (userType == "Admin") setAdmin(true);
    else if (userType == "Staff") setStaff(true);
    else if (userType == "HOD") setHod(true);

    if (notify) {
      showNotification();
    }
  }, [notify]);
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
                if (admin) {
                  return (
                    <Switch>
                      <Route path="/admin">
                        <Admin setLoggedin={setLoggedin} />
                      </Route>
                      <Route path="/user">
                        <UserProfileLayout
                          usedetails={userdetails}
                          setLoggedin={setLoggedin}
                        />
                      </Route>
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                  );
                } else if (staff) {
                  return (
                    <Switch>
                      <Route path="/admin">
                        <StaffsLayout setLoggedin={setLoggedin} />
                      </Route>
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                  );
                } else if (hod) {
                  return (
                    <Switch>
                      <Route path="/admin">
                        <HodLayout setLoggedin={setLoggedin} />
                      </Route>
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                  );
                }
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
