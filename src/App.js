import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import LoginPage from "layouts/LoginPage/LoginPage";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import StaffsLayout from "layouts/StaffsLayout";
import HodLayout from "layouts/HodLayout";

export default function App() {
  const [loggedIn, setLoggedin] = React.useState(false);
  const [notify, setNotification] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [userType, setUserType] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
  const [staff, setStaff] = React.useState(false);
  const [hod, setHod] = React.useState(false);
  useEffect(() => {
    if (userType == "Admin") setAdmin(true);
    else if (userType == "Staff") setStaff(true);
    else if (userType == "HOD") setHod(true);
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
  });
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
      <BrowserRouter>
        <>
          {loggedIn ? (
            <div>
              {(() => {
                if (admin) {
                  return (
                    <Switch>
                      <Route path="/admin" component={Admin}></Route>
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                  );
                } else if (staff) {
                  return (
                    <Switch>
                      <Route path="/admin" component={StaffsLayout}></Route>
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                  );
                } else if (hod) {
                  return (
                    <Switch>
                      <Route path="/admin" component={HodLayout}></Route>
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
