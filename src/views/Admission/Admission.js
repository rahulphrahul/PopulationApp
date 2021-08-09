import React, { useEffect } from "react";
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
import axios from "axios";
import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
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

export default function Admission() {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [files, setFiles] = React.useState(null);
  const [validated, setValidated] = React.useState(true);
  const [uploaded, setUploaded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  //Saved Notification trigger
  const showSavedNotification = () => {
    if (!saved) {
      setSaved(true);
      setTimeout(function () {
        setSaved(false);
      }, 3000);
    }
  };
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
    FName: "",
    LName: "",
    Mobile: "",
    Email: "",
    Gender: "",
    DOB: "",
    Pwd: "",
    Gur_Name: "",
    Gur_Mobile: "",
    Status: "Created",
    Image: "",
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
  function HandleClear() {
    setData({
      Id: 0,
      FName: "",
      LName: "",
      Mobile: "",
      Email: "",
      Gender: "",
      DOB: "",
      Pwd: "",
      Gur_Name: "",
      Gur_Mobile: "",
      Status: "Created",
      Image: "",
    });
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.FName == "") {
      return false;
    } else if (data.LName == "") {
      return false;
    } else if (data.Mobile == "") {
      return false;
    } else if (data.Email == "") {
      return false;
    } else if (data.Gender == "") {
      return false;
    } else if (data.DOB == "") {
      return false;
    } else if (data.Pwd == "") {
      return false;
    } else if (data.Gur_Name == "") {
      return false;
    } else if (data.Gur_Mobile == "") {
      return false;
    } else if (data.Image == "") {
      return false;
    } else return true;
  }
  //function to upload
  function UploadImage() {
    if (files != null) {
      setValidated(true);
      setSaving(true);
      let form_data = new FormData();
      form_data.append("File", files[0]);
      let url = "https://rahulrajrahu33.pythonanywhere.com/api/Uploads/File/";
      axios
        .post(url, form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.Success) {
            data.Image = res.data.Data[0];
            setUploaded(true);
            return true;
          } else {
            setUploaded(false);
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
          setUploaded(false);
          return false;
        });
    } else {
      setValidated(false);
      return false;
    }
  }

  //Function to save Data
  function HandleSave() {
    if (UploadImage()) {
      if (ValidateFields()) {
        setValidated(true);
        fetch(
          "https://rahulrajrahu33.pythonanywhere.com/api/Student/CreateAdmissionDetails/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((response) => response.json())

          .then((json) => {
            if (json.Success) {
              setData({
                Id: 0,
                FName: "",
                LName: "",
                Mobile: "",
                Email: "",
                Gender: "",
                DOB: "",
                Pwd: "",
                Gur_Name: "",
                Gur_Mobile: "",
                Status: "Created",
                Image: "",
              });
              setEmpty(false);
              showSavedNotification();
              setSaving(false);
            } else {
              console.log("Error in insertion");
            }
          });
      } else {
        setValidated(false);
      }
      setUploaded(false);
    }
  }
  useEffect(() => {
    console.log("componentDidMount");
    console.log("Detele" + deletee + " edit" + edit);

    //API call for get latest 10 elements
    fetch(
      "https://rahulrajrahu33.pythonanywhere.com/api/Student/GetAllAdmissionDetails/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passData),
      }
    )
      .then((response) => response.json())

      .then((json) => {
        setEvents(json.Data);
        if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
      });

    //API call for Delete a row
    if (deletee.length != 0) {
      setDeleting(true);
      fetch(
        "https://rahulrajrahu33.pythonanywhere.com/api/Student/DeleteAdmissionDetails/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passDelete),
        }
      )
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
      fetch(
        "https://rahulrajrahu33.pythonanywhere.com/api/Student/GetAdmissionDetailsById/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passEdit),
        }
      )
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setEdit([]);
            setData(json.Data);
            console.log(json.Data);
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
        message="Admission Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Admission Deleted Successfully"
        open={deleted}
        closeNotification={() => setDeleted(false)}
        close
      />
      <LoadingOverlay active={saving} spinner text="Saving Please Wait..">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <form>
                <CardHeader color="info">
                  <h4 className={classes.cardTitleWhite}>Add New Admission</h4>
                  <p className={classes.cardCategoryWhite}>
                    Enter the Admission details below and hit Save
                  </p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.FName}
                        labelText="First Name"
                        id="FName"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.LName}
                        labelText="Last Name"
                        id="LName"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Mobile}
                        labelText="Mobile"
                        id="Mobile"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Email}
                        labelText="Email ID"
                        id="Email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Gender}
                        labelText="Gender"
                        id="Gender"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.DOB}
                        labelText="DOB"
                        id="DOB"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Pwd}
                        labelText="Pwd"
                        id="Pwd"
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
                        value={data.Gur_Name}
                        labelText="Guardian Name"
                        id="Gur_Name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Gur_Mobile}
                        labelText="Guardian Mobile"
                        id="Gur_Mobile"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={5} md={5}>
                      {" "}
                      <CustomFileInput
                        setFiles={setFiles}
                        saved={uploaded}
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
                            filebutton: true,
                          },
                          icon: <AttachFile />,
                        }}
                      />
                      {validated ? (
                        <></>
                      ) : (
                        <Danger>Please enter all the details to save</Danger>
                      )}
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button onClick={HandleClear} color="defualt">
                    Clear
                  </Button>
                  <Button onClick={HandleSave} color="info">
                    Save
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </LoadingOverlay>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>List Of All Admission</h4>
              <p className={classes.cardCategoryWhite}>
                All Admissions are listed below, you can delete or edit them.
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
                      "Id",
                      "FName",
                      "LName",
                      "Mobile",
                      "Email",
                      "Gender",
                      "DOB",
                      "Pwd",
                      "Gur_Name",
                      "Gur_Mobile",
                      "Status",
                      "Image",
                      "Created By",
                      "Created Date",
                      "Modified By",
                      "Modified Date",
                      "Deteled By",
                      "Deleted Date",
                      "Actions",
                    ]}
                    tableData={events}
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
