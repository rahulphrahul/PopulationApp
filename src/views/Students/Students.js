import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";

import AttachFile from "@material-ui/icons/AttachFile";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";

// import { data } from "./data.json";
const styles = {
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

export default function Students() {
  const classes = useStyles();
  const [bc, setBC] = React.useState(false);
  const showNotification = () => {
    if (!bc) {
      setBC(true);
      setTimeout(function () {
        setBC(false);
      }, 3000);
    }
  };
  const [data, setData] = React.useState({
    Id: 0,
    Name: "",
    Venue: "",
    Date: "",
    Status: "Created",
    Image: "url",
    Description: "",
  });
  function HandleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  const [inserted, setInserted] = React.useState("");
  function HandleSave() {
    fetch("https://rahulrajrahu33.pythonanywhere.com/api/Admin/CreateEvents/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())

      .then((json) => {
        setInserted(json.Success);
        setData({
          Id: 0,
          Name: "",
          Venue: "",
          Date: "",
          Status: "Created",
          Image: "url",
          Description: "",
        });
        showNotification();
      });
  }
  let passData = {
    PageIndex: 0,
    PageSize: 10,
  };
  const [events, setEvents] = React.useState([]);
  fetch("https://rahulrajrahu33.pythonanywhere.com/api/Admin/GetAllEvents/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passData),
  })
    .then((response) => response.json())

    .then((json) => {
      setEvents(json.Data);
    });

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Event Saved Successfully"
        open={bc}
        closeNotification={() => setBC(false)}
        close
      />
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Add New Event</h4>
                <p className={classes.cardCategoryWhite}>
                  Enter the Event details below and hit Save
                </p>
              </CardHeader>

              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Name}
                      labelText="Event Name"
                      id="Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Venue}
                      labelText="Venue"
                      id="Venue"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Date}
                      labelText="Date"
                      id="Date"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Description}
                      labelText="Enter a description about the event.."
                      id="Description"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    {" "}
                    <CustomFileInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Click here to upload an image",
                      }}
                      endButton={{
                        buttonProps: {
                          round: true,
                          color: "info",
                          justIcon: true,
                          fileButton: true,
                        },
                        icon: <AttachFile />,
                      }}
                    />
                    {/* <ImageUpload
                      addButtonProps={{ round: true }}
                      changeButtonProps={{ round: true }}
                      removeButtonProps={{ round: true, color: "danger" }}
                    /> */}
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button onClick={HandleSave} color="info">
                  Save
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>List Of All Events</h4>
              <p className={classes.cardCategoryWhite}>
                All events are listed below, you can delete or edit them.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHead={[
                  "ID",
                  "Name",
                  "Venue",
                  "Date",
                  "Status",
                  "Image",
                  "Description",
                  "Created By",
                  "Created Date",
                  "Modified By",
                  "Modified Date",
                  "Deteled By",
                  "Deleted Date",
                ]}
                tableData={events}
              />
            </CardBody>
          </Card>
        </GridItem>
        inserted :{inserted}
      </GridContainer>
    </>
  );
}
