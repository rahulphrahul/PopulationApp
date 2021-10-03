import React, { useEffect } from "react";
import { Domain } from "Domain";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Table from "components/Table/Table.js";
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
import PropTypes from "prop-types";

import AttachFile from "@material-ui/icons/AttachFile";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
// import Pagination from "components/Pagination/Pagination";

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

export default function Admin({ id }) {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  // const [deleted, setDeleted] = React.useState(false);
  // const [deletee, setDelete] = React.useState([]);
  // const [events, setEvents] = React.useState([]);
  const [files, setFiles] = React.useState(null);
  const [validated, setValidated] = React.useState(true);
  const [uploaded, setUploaded] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [deleting, setDeleting] = React.useState(false);
  // const [empty, setEmpty] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [viewData, setViewData] = React.useState(true);
  // const Admindata = events.map((d) => ({
  //   Id: d.Id,
  //   FullName: d.FullName,
  //   Email: d.Email,
  //   Password: d.Password,
  // }));

  //Saved Notification trigger
  const showSavedNotification = () => {
    if (!saved) {
      setSaved(true);
      setTimeout(function () {
        setSaved(false);
      }, 3000);
    }
  };

  //Form Data
  const [data, setData] = React.useState({
    Id: 0,
    FullName: "",
    Email: "",
    Status: "Created",
    Image: "",
    Password: "",
  });

  //PassData for getAll API
  // let passData = {
  //   PageIndex: 0,
  //   PageSize: 10,
  // };

  //PaddData for Delete a Row
  // let passDelete = {
  //   Id: deletee,
  //   DeletedBy: 2,
  // };
  //PassData for getting event by id
  let passEdit = {
    Id: id,
  };
  //Function to handle Data input
  function HandleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }
  function HandleClear() {
    setData({
      Id: 0,
      FullName: "",
      Email: "",
      Status: "Created",
      Image: "",
      Password: "",
    });
    setViewData(false);
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.FullName == "") {
      return false;
    } else if (data.Email == "") {
      return false;
    } else if (data.Status == "") {
      return false;
    } else if (data.Image == "") {
      return false;
    } else if (data.Password == "") {
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
    } else if (data.Image != "") HandleSave();
    else setValidated(false);
  }

  //Function to save Data
  function HandleSave() {
    if (ValidateFields()) {
      setValidated(true);
      fetch(Domain + "/api/Admin/CreateAdminDetails/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setData({
              Id: 0,
              FullName: "",
              Email: "",
              Status: "Created",
              Image: "",
              Password: "",
            });
            window.localStorage.setItem(
              "userdetails",
              JSON.stringify(json.Data)
            );
            // setEmpty(false);
            showSavedNotification();
            setSaving(false);
            setViewData(false);
          } else {
            console.log("Error in insertion");
          }
        });
    } else {
      setValidated(false);
    }
    setUploaded(false);
  }

  // const [TotalCount, setTotalCount] = React.useState();
  // const [pageIndex, setPageIndex] = useState(0);
  // const [pagination, setPagination] = useState(false);

  useEffect(() => {
    //API call to get event By ID to edit a row

    fetch(Domain + "/api/Admin/GetAdminDetailsById/", {
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
          setViewData(true);
          // setEdit([]);
          setData(json.Data);
          // console.log(json.Data);
        }
      });
  }, []);

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Admin Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />

      {viewData ? (
        <LoadingOverlay active={saving} spinner text="Saving Please Wait..">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <form>
                  <CardHeader color="info">
                    <h4 className={classes.cardTitleWhite}>Admin</h4>
                    <p className={classes.cardCategoryWhite}>Details</p>
                  </CardHeader>

                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          onChange={(e) => HandleData(e)}
                          value={data.FullName}
                          labelText="FullName"
                          id="FullName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          onChange={(e) => HandleData(e)}
                          value={data.Email}
                          labelText="Email"
                          id="Email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                          onChange={(e) => HandleData(e)}
                          value={data.Password}
                          labelText="Password"
                          id="Password"
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
                      Cansel
                    </Button>
                    <Button onClick={UploadImage} color="info">
                      Save
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </LoadingOverlay>
      ) : (
        <></>
      )}

      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>List Of All Admin</h4>
              <p className={classes.cardCategoryWhite}>
                All Admins are listed below, you can delete or edit them.
              </p>
            </CardHeader>
            <CardBody>
              {empty ? (
                <p>empty</p>
              ) : (
                <Table
                  tableHeaderColor="info"
                  tableHead={[
                    "",
                    "Id",
                    "FullName",
                    "Email",
                    "Password",
                    // "Gender",
                    // "DOB",
                    // "Address",
                    // "Usertype",
                    // "AreaOfInterest",
                    // "Status",
                    // "Created By",
                    // "Created Date",
                    // "Modified By",
                    // "Modified Date",
                    // "Deteled By",
                    // "Deleted Date",
                    "Actions",
                  ]}
                  tableData={Admindata}
                  setEdit={setEdit}
                  setDelete={setDelete}
                  loading={loading}
                />
              )}
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
      </GridContainer> */}
    </>
  );
}

Admin.propTypes = {
  id: PropTypes.any,
};
