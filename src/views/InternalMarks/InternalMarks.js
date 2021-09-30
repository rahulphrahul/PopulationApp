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
// import axios from "axios";
import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";

// import AttachFile from "@material-ui/icons/AttachFile";
// import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import Pagination from "components/Pagination/Pagination";
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

export default function InternalMarks() {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  // const [files, setFiles] = React.useState(null);
  const [validated, setValidated] = React.useState(true);
  // const [uploaded, setUploaded] = React.useState(false);
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
    CourseId: null,
    Date: "",
    StudentId: "",
    SemesterId: null,
    CourseCode: "",
    SemesterNo: null,
    Note: "",
    ClassNo: null,
    StudentName: "",
    MarkList: "",
    Status: "Created",
    Files: "",
    Description: "",
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
    setValidated(true);
    setData({
      Id: 0,
      CourseId: "",
      Date: "",
      StudentId: "",
      SemesterId: "",
      CourseCode: "",
      SemesterNo: "",
      Note: "",
      ClassNo: "",
      StudentName: "",
      MarkList: "",
      Status: "Created",
      Files: "",
      Description: "",
    });
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.CourseId == "") {
      return false;
    } else if (data.Date == "") {
      return false;
    } else if (data.Description == "") {
      return false;
    } else if (data.StudentId == "") {
      return false;
    } else if (data.SemesterId == "") {
      return false;
    } else if (data.CourseCode == "") {
      return false;
    } else if (data.SemesterNo == "") {
      return false;
    } else if (data.Note == "") {
      return false;
    } else if (data.ClassNo == "") {
      return false;
    } else if (data.StudentName == "") {
      return false;
    } else if (data.MarkList == "") {
      return false;
    } else return true;
  }
  // //function to upload
  // function UploadImage() {
  //   if (files != null) {
  //     setValidated(true);
  //     setSaving(true);
  //     let form_data = new FormData();
  //     form_data.append("File", files[0]);
  //     let url = Domain + "/api/Uploads/File/";
  //     axios
  //       .post(url, form_data, {
  //         headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //       })
  //       .then((res) => {
  //         if (res.data.Success) {
  //           data.Files = res.data.Data[0];
  //           setUploaded(true);
  //           HandleSave();
  //         } else {
  //           setUploaded(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setUploaded(false);
  //       });
  //   } else {
  //     setValidated(false);
  //   }
  // }

  //Function to save Data
  function HandleSave() {
    if (ValidateFields()) {
      fetch(Domain + "/api/Student/CreateInternal/", {
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
              CourseId: "",
              Date: "",
              StudentId: "",
              SemesterId: "",
              CourseCode: "",
              SemesterNo: "",
              Note: "",
              ClassNo: "",
              StudentName: "",
              MarkList: "",
              Status: "Created",
              Files: "",
              Description: "",
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
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    let passData = {
      PageIndex: pageIndex,
      PageSize: 10,
    };
    fetch(Domain + "/api/Student/GetAllInternal/", {
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
        if (json.TotalCount > 10) setPagination(true);
      });
  }, [pageIndex]);

  useEffect(() => {
    console.log("componentDidMount");
    console.log("Detele" + deletee + " edit" + edit);

    //API call for get latest 10 elements
    fetch(Domain + "/api/Student/GetAllInternal/", {
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

    //API call for Delete a row
    if (deletee.length != 0) {
      setDeleting(true);
      fetch(Domain + "/api/Student/DeleteInternal/", {
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
      fetch(Domain + "/api/Student/GetInternalById/", {
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
  }, [deletee, edit, saved]);

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Internal Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Internal Deleted Successfully"
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
                  <h4 className={classes.cardTitleWhite}>
                    Add New InternalMarks
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    Enter the InternalMarks details below and hit Save
                  </p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Date}
                        labelText="Select Exam Date"
                        id="Date"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.CourseId}
                        labelText="Select Course"
                        id="CourseId"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.StudentId}
                        labelText="Student ID"
                        id="StudentId"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.SemesterId}
                        labelText="Select Semester"
                        id="SemesterId"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.CourseCode}
                        labelText="CourseCode"
                        id="CourseCode"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.SemesterNo}
                        labelText="Semester Number"
                        id="SemesterNo"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Note}
                        labelText="Notes"
                        id="Note"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.ClassNo}
                        labelText="Class Number"
                        id="ClassNo"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.StudentName}
                        labelText="StudentName"
                        id="StudentName"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.MarkList}
                        labelText="MarkList"
                        id="MarkList"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={8}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.Description}
                        labelText="Enter Marks seperated by comma"
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
              <h4 className={classes.cardTitleWhite}>
                List Of All InternalMarks
              </h4>
              <p className={classes.cardCategoryWhite}>
                All InternalMarks are listed below, you can delete or edit them.
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
                      "Date",
                      "CourseName",
                      "SemesterNo",
                      "ClassNo",
                      "Note",
                      "Status",
                      "Files",
                      "StudentName",
                      "Description",
                      "Marklist",
                      "Created By",
                      "Created Date",
                      "Modified By",
                      "Modified Date",
                      "Deteled By",
                      "Deleted Date",
                      "CourseId",
                      "SemesterId",
                      "StudentId",
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
