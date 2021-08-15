import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";

import PropTypes from "prop-types";

const styles = {
  cardCategoryRed: {
    color: "#ff0000",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function LoginPage({
  setLoggedin,
  setNotification,
  setUserType,
  setUserdetails,
}) {
  const classes = useStyles();

  const [data, setData] = React.useState({
    Username: "",
    Password: "",
  });
  function HandleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  const [invalid, setInvalid] = React.useState(false);
  function HandleSave() {
    if (data.Username == "" && data.Password == "") {
      setInvalid(true);
      setLoggedin(false);
    } else {
      fetch("https://rahulrajrahu33.pythonanywhere.com/api/Admin/AdminLogin/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((json) => {
          setUserdetails(json.Data);
          setData({
            Id: 0,
            Username: "",
            Password: "",
          });
          if (json.Success) {
            if (json.Data.Usertype == "Admin") setUserType(json.Data.Usertype);
            else setUserType(json.Data.UserType);
            setInvalid(false);
            setLoggedin(true);
            setNotification(true);
          } else {
            setInvalid(true);
            setLoggedin(false);
          }
        });
    }
  }

  return (
    <>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <form>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Admin Login</h4>
                <p className={classes.cardCategoryWhite}>
                  Enter the login Credentails below
                </p>
              </CardHeader>

              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={12}>
                        {invalid ? (
                          <div>
                            <CustomInput
                              error
                              onChange={(e) => HandleData(e)}
                              value={data.Username}
                              labelText="User Name"
                              id="Username"
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </div>
                        ) : (
                          <div>
                            <CustomInput
                              onChange={(e) => HandleData(e)}
                              value={data.Username}
                              labelText="User Name"
                              id="Username"
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </div>
                        )}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        {invalid ? (
                          <div>
                            <CustomInput
                              error
                              onChange={(e) => HandleData(e)}
                              value={data.Password}
                              labelText="Password"
                              id="Password"
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </div>
                        ) : (
                          <div>
                            <CustomInput
                              onChange={(e) => HandleData(e)}
                              value={data.Password}
                              labelText="Password"
                              id="Password"
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </div>
                        )}
                        {invalid ? (
                          <p className={classes.cardCategoryRed}>
                            Invalid Admin Credentials
                          </p>
                        ) : (
                          <div></div>
                        )}
                      </GridItem>

                      <GridItem xs={12} sm={12} md={12}>
                        <Button onClick={HandleSave} color="info">
                          Login
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter></CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
LoginPage.propTypes = {
  setLoggedin: PropTypes.func,
  setNotification: PropTypes.func,
  setUserType: PropTypes.any,
  setUserdetails: PropTypes.any,
};
