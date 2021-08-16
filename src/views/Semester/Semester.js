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
import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";

import SingleSelect from "components/SingleSelect";

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

export default function Semester() {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [validated, setValidated] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [Courses, setCourses] = React.useState([]);
  const [saving, setSaving] = React.useState(false);
  // const [courseName, setCourseName] = React.useState("");
  // const [courseId, setCourseId] = React.useState(null);

  //Converting json response to passdata for react select
  const CourseList = Courses.map((d) => ({
    value: d.Id,
    label: d.CourseName,
  }));
  const [CourseValues, setCourseValues] = React.useState({
    Id: null,
    label: "",
  });
  const Semesterdata = events.map((d) => ({
    Id: d.Id,
    CourseId: d.CourseId,
    CourseName: d.CourseName,
    SemesterDuration: d.SemesterDuration,
    SemesterNo: d.SemesterNo,
  }));
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
    SemesterNo: "",
    CourseId: null,
    CourseName: "",
    SemesterDuration: "",
    Status: "Created",
    Image: "",
  });

  console.log(data.CourseName, data.CourseId);

  //PassData for getAll API
  let passData = {
    PageIndex: 0,
    PageSize: 10,
  };
  //PassData for get all semesters and courses for dropdown
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
      SemesterNo: "",
      CourseName: "",
      SemesterDuration: "",
      Status: "Created",
    });
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.SemesterNo == "") {
      return false;
    } else if (data.CourseDuration == "") {
      return false;
    } else if (data.CourseName == "") {
      return false;
    } else return true;
  }

  //Function to save Data
  function HandleSave() {
    if (ValidateFields()) {
      setValidated(true);
      fetch(
        "https://rahulrajrahu33.pythonanywhere.com/api/Admin/CreateSemester/",
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
          console.log(json);
          console.log("data:", data);
          if (json.Success) {
            setData({
              Id: 0,
              SemesterNo: "",
              CourseId: "",
              CourseName: "",
              SemesterDuration: "",
              Status: "Created",
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
  useEffect(() => {
    setData((data) => ({
      ...data,
      CourseId: CourseValues.Id,
      CourseName: CourseValues.Label,
    }));
    //API call for get all course names to dropedown
    fetch(
      "https://rahulrajrahu33.pythonanywhere.com/api/Admin/GetAllCourses/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passData1),
      }
    )
      .then((response) => response.json())

      .then((json) => {
        if (json.Data.length != 0) setCourses(json.Data);
      });

    //API call for get latest 10 elements
    fetch(
      "https://rahulrajrahu33.pythonanywhere.com/api/Admin/GetAllSemester/",
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
        "https://rahulrajrahu33.pythonanywhere.com/api/Admin/DeleteSemester/",
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
        "https://rahulrajrahu33.pythonanywhere.com/api/Admin/GetSemesterById/",
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
  }, [deletee, edit, saved, CourseValues.Id]);

  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Semester Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Semester Deleted Successfully"
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
                  <h4 className={classes.cardTitleWhite}>Add New Semester</h4>
                  <p className={classes.cardCategoryWhite}>
                    Enter the Semester details below and hit Save
                  </p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
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
                    <GridItem xs={12} sm={12} md={3}>
                      <SingleSelect
                        noOptionsMessage="Create any course first"
                        placeholder="Select Course"
                        Options={CourseList}
                        setValue={setCourseValues}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        onChange={(e) => HandleData(e)}
                        value={data.SemesterDuration}
                        labelText="Semester Duration"
                        id="SemesterDuration"
                        formControlProps={{
                          fullWidth: true,
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
              <h4 className={classes.cardTitleWhite}>List Of All semester</h4>
              <p className={classes.cardCategoryWhite}>
                All Semester are listed below, you can delete or edit them.
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
                      "ID",
                      "Course ID",
                      "CourseName",
                      "SemesterDuration",
                      "Semester Number",
                      "Actions",
                    ]}
                    tableData={Semesterdata}
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
