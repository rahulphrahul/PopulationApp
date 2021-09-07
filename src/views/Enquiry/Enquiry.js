import React, { useEffect } from "react";
import { Domain } from "Domain";

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
import LoadingOverlay from "react-loading-overlay";
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

export default function Enquiry() {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  // const [validated, setValidated] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  // const [saving, setSaving] = React.useState(false);
  const [viewEnquiry, setViewEnquiry] = React.useState(false);
  function HandleView() {
    if (viewEnquiry) setViewEnquiry(false);
    else setViewEnquiry(true);
  }
  const Enquirydata = events.map((d) => ({
    Id: d.Id,
    Name: d.Name,
    Mobile: d.Mobile,
    // Image: d.Image,
    Description: d.Description,
  }));
  //Saved Notification trigger
  // const showSavedNotification = () => {
  //   if (!saved) {
  //     setSaved(true);
  //     setTimeout(function () {
  //       setSaved(false);
  //     }, 3000);
  //   }
  // };
  //Deleted Notification Trigger
  const showDeletedNotification = () => {
    if (!deleted) {
      setDeleted(true);
      setTimeout(function () {
        setDeleted(false);
      }, 3000);
    }
  };
  //Form Data
  const [data, setData] = React.useState({
    Id: 0,
    Name: "",
    Mobile: "",
    Description: "",
    Status: "Created",
  });

  //PassData for getAll API
  let passData = {
    PageIndex: 0,
    PageSize: 10,
  };

  //PaddData for Delete a Row
  let passDelete = {
    Id: deletee,
    DeletedBy: 2,
  };
  //PassData for getting event by id
  let passEdit = {
    Id: edit,
  };
  //Function to handle Data input
  function HandleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  // function HandleClear() {
  //   setData({
  //     Id: 0,
  //     Name: "",
  //     Mobile: "",
  //     Description: "",
  //     Status: "Created",
  //   });
  // }
  //Function for Validating fields
  // function ValidateFields() {
  //   if (data.Name == "") {
  //     return false;
  //   } else if (data.Mobile == "") {
  //     return false;
  //   } else if (data.Description == "") {
  //     return false;
  //   } else return true;
  // }

  // //Function to save Data
  // function HandleSave() {
  //   if (ValidateFields()) {
  //     setValidated(true);
  //     fetch(
  //       Domain + "/api/Admin/CreateEnquiry/",
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     )
  //       .then((response) => response.json())

  //       .then((json) => {
  //         if (json.Success) {
  //           setData({
  //             Id: 0,
  //             Name: "",
  //             Mobile: "",
  //             Description: "",
  //             Status: "Created",
  //           });
  //           setEmpty(false);
  //           showSavedNotification();
  //           setSaving(false);
  //         } else {
  //           console.log("Error in insertion");
  //         }
  //       });
  //   } else {
  //     setValidated(false);
  //   }
  // }
  useEffect(() => {
    //API call for get latest 10 elements
    fetch(Domain + "/api/Admin/GetAllEnquiry/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        setEvents(json.Data);
        if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
      });

    //API call for Delete a row
    if (deletee.length != 0) {
      setDeleting(true);
      fetch(Domain + "/api/Admin/DeleteEnquiry/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passDelete),
      })
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setDelete([]);
            showDeletedNotification();
            setDeleting(false);
          }
        });
    }

    //API call to get event By ID to edit a row
    if (edit.length != 0) {
      fetch(Domain + "/api/Admin/GetEnquiryById/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passEdit),
      })
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setEdit([]);
            setData(json.Data);
            HandleView();
          }
        });
    }
  }, [deletee, edit, saved]);

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Enquiry Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Enquiry Deleted Successfully"
        open={deleted}
        closeNotification={() => setDeleted(false)}
        close
      />

      {viewEnquiry ? (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form>
                <CardHeader color="info">
                  <h4 className={classes.cardTitleWhite}>View Enquiry</h4>
                  <p className={classes.cardCategoryWhite}>
                    View the Message below
                  </p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        disabled
                        onChange={(e) => HandleData(e)}
                        value={data.Name}
                        labelText="Student Name"
                        id="Name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        disabled
                        onChange={(e) => HandleData(e)}
                        value={data.Mobile}
                        labelText="Mobile"
                        id="Mobile"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        disabled
                        onChange={(e) => HandleData(e)}
                        value={data.Description}
                        labelText="Message"
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
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button onClick={HandleView} color="danger">
                    Close
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      ) : (
        <></>
      )}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>List Of All Enquirys</h4>
              <p className={classes.cardCategoryWhite}>
                All Enquirys are listed below, you can delete or edit them.
              </p>
            </CardHeader>
            <CardBody>
              <LoadingOverlay active={deleting} spinner text="Please Wait..">
                {empty ? (
                  <p>empty</p>
                ) : (
                  <Table
                    tableHeaderColor="info"
                    tableHead={[
                      "",
                      "ID",
                      "Name",
                      "Mobile",
                      // "Status",
                      // "Image",
                      "Description",
                      // "Created By",
                      // "Created Date",
                      // "Modified By",
                      // "Modified Date",
                      // "Deteled By",
                      // "Deleted Date",
                      "Actions",
                    ]}
                    tableData={Enquirydata}
                    setEdit={setEdit}
                    setDelete={setDelete}
                    loading={loading}
                  />
                )}
              </LoadingOverlay>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
