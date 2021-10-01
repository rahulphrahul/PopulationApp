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
import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";
import SingleSelect from "components/SingleSelect";
import Success from "components/Typography/Success";
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

export default function SendSMS() {
  const classes = useStyles();
  const [saved, setSaved] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [validateFilter, setValidateFilter] = React.useState(true);
  const [Courses, setCourses] = React.useState([]);
  const [sizeOfArray, setSizeOfArray] = React.useState(null);
  const CourseList = Courses.map((d) => ({
    value: d.Id,
    label: d.CourseName,
  }));
  //Filter Data
  const [filterData, setFilterData] = React.useState({
    PageIndex: 0,
    PageSize: 10,
    Year: "",
    CourseId: "",
  });
  const [messageData, setMessageData] = React.useState({
    Mobile: "9605263417",
    Message: "",
  });
  const [CourseValues, setCourseValues] = React.useState({
    Id: null,
    label: "",
  });
  const Studentdata = events.map((d) => ({
    Id: d.Id,
    FullName: d.FullName,
    RegistrationNo: d.RegistrationNo,
    ClassNo: d.ClassNo,
    AdmissionNo: d.AdmissionNo,
    Mobile: d.Mobile,
    Email: d.Email,
    Course: d.Course,
    CourseCode: d.CourseCode,
    Gender: d.Gender,
    DOB: d.DOB,
    Password: d.Password,
    GuardianName: d.GuardianName,
    GuardianMobile: d.GuardianMobile,
    GuardianRelation: d.GuardianRelation,
    Image: d.Image,
    CourseId: d.CourseId,
  }));

  //PassData for get all semesters and courses for dropdown
  let passData1 = {
    PageIndex: 0,
    PageSize: 0,
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
    FullName: "",
    Mobile: "",
    Email: "",
    Gender: "",
    DOB: "",
    Password: "",
    GuardianName: "",
    GuardianMobile: "",
    RegistrationNo: "",
    ClassNo: "",
    AdmissionNo: "",
    CourseId: null,
    Course: "",
    CourseCode: "",
    GuardianRelation: "",
    Status: "Created",
    Image: "",
  });
  console.log(data);
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

  function HandleFilterData(e) {
    const newData = { ...filterData };
    newData[e.target.id] = e.target.value;
    setFilterData(newData);
    console.log(newData);
  }
  function HandleMessageData(e) {
    const newData = { ...messageData };
    newData[e.target.id] = e.target.value;
    setMessageData(newData);
    console.log(newData);
  }

  const [TotalCount, setTotalCount] = React.useState();
  const [pageIndex, setPageIndex] = useState(0);
  const [pagination, setPagination] = useState(false);

  useEffect(() => {
    let passData = {
      PageIndex: pageIndex,
      PageSize: 10,
    };
    fetch(Domain + "/api/Student/GetAllStudents/", {
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
        if (json.TotalCount > 10) {
          console.log("pages", Math.ceil(json.TotalCount / 10));
          setTotalCount(Math.ceil(json.TotalCount / 10));

          setPagination(true);
        }
      });
  }, [pageIndex]);

  useEffect(() => {
    console.log(CourseValues);
    setFilterData((data) => ({
      ...data,
      CourseId: CourseValues.Id,
    }));
  }, [CourseValues.Id]);
  useEffect(() => {
    //API call for get all course names to dropedown
    fetch(Domain + "/api/Admin/GetAllCourses/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData1),
    })
      .then((response) => response.json())

      .then((json) => {
        if (json.Data.length != 0) setCourses(json.Data);
      });
    //API call for get latest 10 elements
    fetch(Domain + "/api/Student/GetAllStudents/", {
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
      fetch(Domain + "/api/Student/DeleteStudent/", {
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
      fetch(Domain + "/api/Student/GetStudentById/", {
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
  function HandleFilter() {
    console.log(filterData);
    if (
      filterData.CourseId == null ||
      filterData.CourseId == "" ||
      filterData.Year == ""
    )
      setValidateFilter(false);
    else {
      setDeleting(true);
      setValidateFilter(true);

      //API call for get latest 10 elements
      fetch(Domain + "/api/Student/GetStudentsByCourseIdandDate/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterData),
      })
        .then((response) => response.json())

        .then((json) => {
          console.log(json);
          setEmpty(false);
          setEvents(json.Data);
          setSizeOfArray(json.Data.length);
          setFilterData({
            PageIndex: 0,
            PageSize: 10,
            Year: "",
            CourseId: "",
          });
          setDeleting(false);
          if (json.Data.length == 0) setEmpty(true);
          setLoading(false);
        });
    }
  }
  return (
    <>
      <Snackbar
        place="bc"
        color="success"
        icon={AddAlert}
        message="Student Saved Successfully"
        open={saved}
        closeNotification={() => setSaved(false)}
        close
      />
      <Snackbar
        place="bc"
        color="danger"
        icon={AddAlert}
        message="Student Deleted Successfully"
        open={deleted}
        closeNotification={() => setDeleted(false)}
        close
      />

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Add Reciepient List</h4>
                <p className={classes.cardCategoryWhite}>
                  Select the Year and Course then click search to Add reciepient
                  list
                </p>
              </CardHeader>

              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleFilterData(e)}
                      value={filterData.Year}
                      labelText="Year"
                      id="Year"
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
                </GridContainer>
                {validateFilter ? (
                  <>
                    {sizeOfArray == null ? (
                      <></>
                    ) : (
                      <>
                        {sizeOfArray == 0 ? (
                          <Danger>No student Found!</Danger>
                        ) : (
                          <Success>Found {sizeOfArray} Students</Success>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <Danger>Please select Year and Course</Danger>
                )}
              </CardBody>
              <CardFooter>
                <Button onClick={HandleFilter} color="info">
                  Search
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      onChange={(e) => HandleMessageData(e)}
                      value={messageData.Message}
                      labelText="Enter the Message here"
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
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button onClick={HandleFilter} color="info">
                  Send to ({sizeOfArray})
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
              <h4 className={classes.cardTitleWhite}>Recent Messages</h4>
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
                      "Id",
                      "FullName",
                      "Registration No",
                      "ClassNo",
                      "AdmissionNo",
                      "Mobile",
                      "Email",
                      "Course",
                      "Coursecode",
                      "Gender",
                      "DOB",
                      "Password",
                      "Gur_Name",
                      "Gur_Mobile",
                      "Gur_Relation",
                      "Image",
                      "CourseId",
                      "Actions",
                      // "Created By",
                      // "Created Date",
                      // "Modified By",
                      // "Modified Date",
                      // "Deteled By",
                      // "Deleted Date",
                    ]}
                    tableData={Studentdata}
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
