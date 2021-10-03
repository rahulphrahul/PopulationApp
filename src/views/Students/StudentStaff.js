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
import SingleSelect from "components/SingleSelect";
import AttachFile from "@material-ui/icons/AttachFile";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import Pagination from "components/Pagination/Pagination";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import { Warning } from "@material-ui/icons";
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

export default function StudentStaff() {
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
  const [addStudent, setAddstudent] = React.useState(false);
  // const [validateFilter, setValidateFilter] = React.useState(true);
  const [Courses, setCourses] = React.useState([]);
  const [TotalCount, setTotalCount] = React.useState();
  const [validateEmpty, setvalidateEmpty] = React.useState(true);
  const [generating, setGenerating] = React.useState(false);
  const [classNumber, setClassNumber] = React.useState(false);
  const [alreadygenerated, setAllreadyGenerated] = React.useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  const CourseList = Courses.map((d) => ({
    value: d.Id,
    label: d.CourseName,
  }));
  //Filter Data
  let filterData = {
    PageIndex: 0,
    PageSize: 10,
    Year: 2021,
    CourseId: JSON.parse(window.localStorage.getItem("userdetails")).CourseId,
  };
  // const [CourseValues, setCourseValues] = React.useState({
  //   Id: null,
  //   label: "",
  // });
  const [CourseValues1, setCourseValues1] = React.useState({
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

  const [pageIndex, setPageIndex] = useState(0);
  const [pagination, setPagination] = useState(false);
  const [TotalStudents, setTotalStudents] = React.useState(0);
  useEffect(() => {
    let passData = {
      PageIndex: pageIndex,
      PageSize: 10,
    };
    fetch(Domain + "/api/Student/GetStudentsByCourseIdandDate/", {
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
          // console.log("pages", Math.ceil(json.TotalCount / 10));
          setTotalCount(Math.ceil(json.TotalCount / 10));

          setPagination(true);
        }
      });
  }, [pageIndex]);

  //PassData for get all semesters and courses for dropdown
  let passData1 = {
    PageIndex: 0,
    PageSize: 0,
  };
  const [generated, setGenerated] = React.useState(false);
  function AddStudent() {
    if (addStudent) {
      setAddstudent(false);
      HandleClear();
    } else setAddstudent(true);
  }
  //Saved Notification trigger
  const showSavedNotification = () => {
    if (!saved) {
      setSaved(true);
      setTimeout(function () {
        setSaved(false);
      }, 3000);
    }
  };
  //Class Number Generated Notification
  const ShowGeneratedNotification = () => {
    if (!saved) {
      setGenerated(true);
      setTimeout(function () {
        setGenerated(false);
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
    FullName: "",
    Mobile: "",
    Email: "",
    Gender: "",
    DOB: "",
    Password: "",
    GuardianName: "",
    GuardianMobile: "",
    RegistrationNo: "",
    AdmissionNo: "",
    CourseId: null,
    Course: "",
    CourseCode: "",
    GuardianRelation: "",
    Status: "Created",
    Image: "",
  });

  //PassData for getAll API
  // let passData = {
  //   PageIndex: 0,
  //   PageSize: 10,
  // };

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
    // console.log(newData);
  }
  // function HandleFilterData(e) {
  //   const newData = { ...filterData };
  //   newData[e.target.id] = e.target.value;
  //   setFilterData(newData);
  //   console.log(newData);
  // }
  function HandleClear() {
    setData({
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
      AdmissionNo: "",
      CourseId: "",
      Course: "",
      CourseCode: "",
      GuardianRelation: "",
      Status: "Created",
      Image: "",
    });
  }
  //Function for Validating fields
  function ValidateFields() {
    if (data.FullName == "") {
      return false;
    } else if (data.Mobile == "") {
      return false;
    } else if (data.Email == "") {
      return false;
    } else if (data.Gender == "") {
      return false;
    } else if (data.DOB == "") {
      return false;
    } else if (data.GuardianName == "") {
      return false;
    } else if (data.GuardianMobile == "") {
      return false;
    } else if (data.RegistrationNo == "") {
      return false;
    } else if (data.CourseId == "") {
      return false;
    } else if (data.AdmissionNo == "") {
      return false;
    } else if (data.GuardianRelation == "") {
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
      fetch(Domain + "/api/Student/CreateStudent/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((json) => {
          // console.log(json);
          if (json.Success) {
            setData({
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
              AdmissionNo: "",
              CourseId: "",
              Course: "",
              CourseCode: "",
              GuardianRelation: "",
              Status: "Created",
              Image: "",
            });
            setEmpty(false);
            showSavedNotification();
            setSaving(false);
            setAddstudent(false);
          } else {
            setSaving(false);
            console.log("Error in insertion");
          }
        });
    } else {
      setValidated(false);
      setSaving(false);
    }
    setUploaded(false);
  }
  // useEffect(() => {
  //   console.log(CourseValues);
  //   setFilterData((data) => ({
  //     ...data,
  //     CourseId: CourseValues.Id,
  //   }));
  // }, [CourseValues.Id]);

  useEffect(() => {
    if (CourseValues1.Id != null) {
      let PassId = {
        Id: CourseValues1.Id,
      };
      //API call to get event By ID to edit a row

      fetch(Domain + "/api/Admin/GetCoursesById/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(PassId),
      })
        .then((response) => response.json())

        .then((json) => {
          console.log(json);

          if (json.Success) {
            setData((data) => ({
              ...data,
              CourseCode: json.Data.CourseCode,
              CourseId: CourseValues1.Id,
              Course: CourseValues1.Label,
            }));
            // console.log(json.Data);
          }
        });
    }

    // console.log("CourseValues1: ", data, CourseValues1.Id);
  }, [CourseValues1.Id]);

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
        setTotalStudents(json.TotalCount);
        setEvents(json.Data);
        if (json.Data.length == 0) {
          setvalidateEmpty(false);
          setEmpty(true);
        }
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
            setAddstudent(true);
            // console.log(json.Data);
          }
        });
    }
  }, [deletee, edit, saved]);

  // function HandleFilter() {
  //   console.log(filterData);
  //   if (
  //     filterData.CourseId == null ||
  //     filterData.CourseId == "" ||
  //     filterData.Year == ""
  //   )
  //     setValidateFilter(false);
  //   else {
  //     setDeleting(true);
  //     setValidateFilter(true);

  //     //API call for get latest 10 elements
  //     fetch(Domain + "/api/Student/GetStudentsByCourseIdandDate/", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(filterData),
  //     })
  //       .then((response) => response.json())

  //       .then((json) => {
  //         console.log(json);
  //         setEmpty(false);
  //         setEvents(json.Data);
  //         setFilterData({
  //           PageIndex: 0,
  //           PageSize: 10,
  //           Year: "",
  //           CourseId: "",
  //         });
  //         setDeleting(false);
  //         if (json.Data.length == 0) setEmpty(true);
  //         setLoading(false);
  //       });
  //   }
  // }
  function GenerateClassNumber() {
    setGenerating(true);
    // console.log(
    //   "Course ID from userDetails:",
    //   JSON.parse(window.localStorage.getItem("userdetails")).CourseId
    // );
    let PassId = {
      Id: JSON.parse(window.localStorage.getItem("userdetails")).CourseId,
    };
    //API call to get event By ID to edit a row

    fetch(Domain + "/api/Admin/GetCoursesById/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PassId),
    })
      .then((response) => response.json())

      .then((json) => {
        // console.log(json);

        if (json.Success) {
          // console.log("CourseCode from Server:", json.Data.CourseCode);
          let passData3 = {
            CourseCode: json.Data.CourseCode,
          };
          fetch(Domain + "/api/Staff/Generate/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(passData3),
          })
            .then((response) => response.json())

            .then((json) => {
              console.log(json);
              if (json.Success) {
                setGenerating(false);
                ShowGeneratedNotification();
              } else {
                setGenerating(false);
                setAllreadyGenerated(true);
              }
            });
        }
      });
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
        color="success"
        icon={AddAlert}
        message="Class Number Generated Successfully"
        open={generated}
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
      {addStudent ? (
        <div>
          <LoadingOverlay active={saving} spinner text="Saving Please Wait..">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <form>
                    <CardHeader color="info">
                      <h4 className={classes.cardTitleWhite}>
                        Add New Students
                      </h4>
                      <p className={classes.cardCategoryWhite}>
                        Enter the Student details below and hit Save
                      </p>
                    </CardHeader>

                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.FullName}
                            labelText="Full Name"
                            id="FullName"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.RegistrationNo}
                            labelText="Registration No"
                            id="RegistrationNo"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <SingleSelect
                            noOptionsMessage="Create any course first"
                            placeholder="Select Course"
                            Options={CourseList}
                            setValue={setCourseValues1}
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            disabled
                            onChange={(e) => HandleData(e)}
                            value={data.CourseCode}
                            labelText="Course Code"
                            id="CourseCode"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.AdmissionNo}
                            labelText="Admission No"
                            id="AdmissionNo"
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

                        <GridItem xs={12} sm={12} md={4}>
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
                        <GridItem xs={12} sm={12} md={4}>
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
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.DOB}
                            labelText="Date Of Birth (dd/mm/yyyy)"
                            id="DOB"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.GuardianName}
                            labelText="Guardian Name"
                            id="GuardianName"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.GuardianMobile}
                            labelText="Guardian Mobile"
                            id="GuardianMobile"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            onChange={(e) => HandleData(e)}
                            value={data.GuardianRelation}
                            labelText="Gurdian Relation"
                            id="GuardianRelation"
                            formControlProps={{
                              fullWidth: true,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5} md={4}>
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
                            <Danger>
                              Please enter all the details to save
                            </Danger>
                          )}
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <Button onClick={AddStudent} color="danger">
                        Cancel
                      </Button>
                      <Button onClick={HandleClear} color="defualt">
                        Clear
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
        </div>
      ) : (
        <Button onClick={AddStudent} color="info">
          Add Student
        </Button>
      )}

      {classNumber ? (
        <LoadingOverlay
          active={generating}
          spinner
          text="Generating class Numbers Please Wait."
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <form>
                  <CardHeader color="info">
                    <h4 className={classes.cardTitleWhite}>
                      Generate Class Number
                    </h4>
                  </CardHeader>

                  <CardBody>
                    {!alreadygenerated ? (
                      <>
                        {validateEmpty ? (
                          <>
                            <SnackbarContent
                              message={
                                <span>
                                  <b>Attention! :</b>Class Number Generation is
                                  a one-time process which you only do after
                                  every student data is listed below.
                                </span>
                              }
                              color="warning"
                              icon={Warning}
                            />

                            <b>
                              Clicking on the below Button will Generate Class
                              Number for <u>{TotalStudents}</u> student(s)
                            </b>
                            <br />
                            <Button
                              onClick={GenerateClassNumber}
                              color="success"
                            >
                              Generate Class Number
                            </Button>
                            <Button
                              onClick={() => {
                                setClassNumber(false);
                              }}
                              color="danger"
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <Danger>No Student Data found!</Danger>
                        )}
                      </>
                    ) : (
                      <>
                        <SnackbarContent
                          message={
                            <span>
                              <b>Allready Generated! :</b>Class Number
                              Generation is a one-time process which you already
                              done once!
                            </span>
                          }
                          color="warning"
                          icon={Warning}
                        />
                      </>
                    )}
                  </CardBody>
                  <CardFooter></CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </LoadingOverlay>
      ) : (
        <>
          {" "}
          <Button
            onClick={() => {
              setClassNumber(true);
            }}
            color="info"
          >
            Generate Class Number
          </Button>
        </>
      )}

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>List Of All Students</h4>
              <p className={classes.cardCategoryWhite}>
                All students are listed below, you can delete or edit them.
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
                      "Id",
                      "Full Name",
                      "Registration No",
                      "Class Number",
                      "Admission Number",
                      "Mobile",
                      "Email",
                      "Course",
                      "Course code",
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
