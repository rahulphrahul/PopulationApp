import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
import Pagination from "components/Pagination/Pagination";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";

import AttachFile from "@material-ui/icons/AttachFile";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import SingleSelect from "components/SingleSelect";
import EmptyTable from "components/EmptyTable";

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
  cardCategoryGrey: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgb(128,128,128)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
      fontWeight: "500",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardStyle: {
    padding: "10px",
    paddingRight: "0",
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

export default function AdministrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
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
  const [departments, setDepartments] = React.useState([]);
  const [TotalCount, setTotalCount] = React.useState();

  const [admintypeValues, setadmintypeValues] = React.useState({
    Id: null,
    Label: "",
  });

  const admintypeList = [
    { value: 1, label: "Provincial Administration" },
    { value: 2, label: "Local Administration" },
    { value: 3, label: "Academic Administration" },
    { value: 4, label: "Counseling and health service" },
  ];

  const [pageIndex, setPageIndex] = useState(0);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    let passData = {
      PageIndex: pageIndex,
      PageSize: 10,
    };
    fetch(Domain + "/api/Staff/GetAllAdministrations/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log("faculties: ", json);
        setEvents(json.Data);

        if (json.TotalCount > 10) {
          console.log("pages", Math.ceil(json.TotalCount / 10));
          setTotalCount(Math.ceil(json.TotalCount / 10));

          setPagination(true);
        }
      });
  }, [pageIndex]);

  console.log(departments);
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
    AdminTypeId: "",
    AdminType: "",
    Name: "",
    Position: "",
    Message: "",
    Image: "",
  });

  //PassData for getAll API
  let passData = {
    PageIndex: 0,
    PageSize: 10,
  };
  let passData1 = {
    PageIndex: 0,
    PageSize: 0,
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
      AdminTypeId: "",
      AdminType: "",
      Name: "",
      Position: "",
      Message: "",
      Image: "",
    });
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.AdminType == "") {
      return false;
    } else if (data.Name == "") {
      return false;
    } else if (data.Position == "") {
      return false;
    } else if (data.Message == "") {
      return false;
    } else if (data.Image == "") {
      return false;
    } else return true;
  }
  //function to upload
  function UploadImage() {
    if (files != null) {
      setValidated(true);
      let form_data = new FormData();
      form_data.append("File", files[0]);
      let url = Domain + "/api/Uploads/File/";
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
            HandleSave();
          } else {
            setUploaded(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setUploaded(false);
        });
    } else {
      setValidated(false);
    }
  }

  //Function to save Data
  function HandleSave() {
    if (ValidateFields()) {
      setValidated(true);
      fetch(Domain + "/api/Staff/CreateAdministrations/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((json) => {
          console.log(json);
          if (json.Success) {
            setData({
              Id: 0,
              AdminTypeId: "",
              AdminType: "",
              Name: "",
              Position: "",
              Message: "",
              Image: "",
            });
            setEmpty(false);
            showSavedNotification();
          } else {
            setData({
              Id: 0,
              AdminTypeId: "",
              AdminType: "",
              Name: "",
              Position: "",
              Message: "",
              Image: "",
            });
            console.log("Error in insertion");
          }
        });
    } else {
      setValidated(false);
    }
    setUploaded(false);
  }
  //==============================UseEffect=================================================
  useEffect(() => {
    setData((data) => ({
      ...data,
      AdminTypeId: admintypeValues.Id,
      AdminType: admintypeValues.Label,
    }));
    // console.log("data:", data);
    //API call for get latest 10 elements
    fetch(Domain + "/api/Admin/GetAllDepartments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData1),
    })
      .then((response) => response.json())

      .then((json) => {
        setDepartments(json.Data);
        if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
      });

    // useEffect(() => {
    // let passData = {
    //   PageIndex: pageIndex,
    //   PageSize: 10,
    // };

    //API call for get latest 10 elements
    fetch(Domain + "/api/Staff/GetAllAdministrationsById/", {
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
        if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
      });
    // if (json.Data.length > 10) setPagination(true);
    // // if (json.Data.length == 0) setEmpty(true);
    // setLoading(false);
    // });
    // }, [pageIndex]);

    //API call for Delete a row
    if (deletee.length != 0) {
      setDeleting(true);
      fetch(Domain + "/api/Staff/DeleteAdministrations/", {
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
      fetch(Domain + "/api/Staff/GetAllAdministrationsById/", {
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
            console.log(json.Data);
          }
        });
    }
  }, [deletee, edit, saved, admintypeValues.Id]);

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Staff Details Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Staff Details Deleted Successfully"
        open={deleted}
        closeNotification={() => setDeleted(false)}
        close
      />
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Add Administrations</h4>
                <p className={classes.cardCategoryWhite}>Enter the Details</p>
              </CardHeader>

              <CardBody>
                <Card className={classes.cardStyle}>
                  <p className={classes.cardCategoryGrey}>
                    Administration Type
                  </p>
                  <br />
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <SingleSelect
                        noOptionMessage="Empty"
                        placeholder="Select Type"
                        Options={admintypeList}
                        setValue={setadmintypeValues}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </Card>

                <p className={classes.cardCategoryGrey}>Other Details</p>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Name}
                      labelText="Name"
                      id="Name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Position}
                      labelText="Position"
                      id="Position"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleData(e)}
                      value={data.Message}
                      labelText="Message.."
                      id="Message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={5} md={6}>
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
                <Button onClick={HandleClear}>Clear</Button>
                <Button onClick={UploadImage} color="info">
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
              <h4 className={classes.cardTitleWhite}>
                List Of All Administration Members
              </h4>
              <p className={classes.cardCategoryWhite}>
                All Entries are listed below, you can delete or edit them.
              </p>
            </CardHeader>
            <CardBody>
              <LoadingOverlay active={deleting} spinner text="Please Wait..">
                {empty ? (
                  <EmptyTable />
                ) : (
                  <Table
                    tableHeaderColor="info"
                    tableHead={[
                      "",
                      "Id",
                      "Name",
                      "Administration Type",
                      "Position",
                      "Message",
                      "Image",
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
          {pagination ? (
            <Pagination
              TotalCount={TotalCount}
              setPageIndex={setPageIndex}
              pageIndex={pageIndex}
              className={
                classes.textCenter + " " + classes.justifyContentCenter
              }
              pages={[
                { text: "Previous" },
                { active: true, text: "1" },

                { text: "Next" },
              ]}
              color="info"
            />
          ) : (
            <></>
          )}
        </GridItem>
      </GridContainer>
    </>
  );
}