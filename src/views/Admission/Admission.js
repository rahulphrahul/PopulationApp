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
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import NavPills from "components/NavPills/NavPills.js";
import AddAlert from "@material-ui/icons/AddAlert";
import Button from "components/CustomButtons/Button.js";
import { Domain } from "Domain";
// import axios from "axios";
// import Danger from "components/Typography/Danger";
import LoadingOverlay from "react-loading-overlay";
// import ImageUpload from "components/CustomUpload/ImageUpload.js";
import Accordion from "components/Accordion/Accordion";

// import AttachFile from "@material-ui/icons/AttachFile";
// import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";

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
  const [edit1, setEdit1] = React.useState([]);
  const [edit2, setEdit2] = React.useState([]);
  const [deletee, setDelete] = React.useState([]);
  const [requested, setRequested] = React.useState([]);
  const [waitingList, setWaitingList] = React.useState([]);
  const [admitted, setAdmitted] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [empty1, setEmpty1] = React.useState(false);
  const [empty2, setEmpty2] = React.useState(false);
  const [viewData, Setview] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [stepChangeData, setStepChangeData] = React.useState();
  const [stepChangeData1, setStepChangeData1] = React.useState();
  const [stepChangeData2, setStepChangeData2] = React.useState();
  function HandleView() {
    if (viewData) {
      Setview(false);
      setStep(0);
    } else {
      setStep(1);
      Setview(true);
    }
  }
  function HandleView1() {
    if (viewData) {
      Setview(false);
      setStep(0);
    } else {
      setStep(2);
      Setview(true);
    }
  }
  function HandleView2() {
    if (viewData) {
      Setview(false);
      setStep(0);
    } else {
      setStep(3);
      Setview(true);
    }
  }
  const ReqData = requested.map((d) => ({
    Id: d.Id,
    AdmissionNo: d.AdmissionNo,
    FirstName: d.FirstName,
    Gender: d.Gender,
    DOB: d.DOB,
    Course: d.Course,
    FathersName: d.FathersName,
    FatherMobile: d.FatherMobile,
    District: d.District,
    HouseName: d.HouseName,
    Email: d.Email,
  }));
  const WaitData = waitingList.map((d) => ({
    Id: d.Id,
    AdmissionNo: d.AdmissionNo,
    FirstName: d.FirstName,
    Gender: d.Gender,
    DOB: d.DOB,
    Course: d.Course,
    FathersName: d.FathersName,
    FatherMobile: d.FatherMobile,
    District: d.District,
    HouseName: d.HouseName,
    Email: d.Email,
  }));
  const AdmData = admitted.map((d) => ({
    Id: d.Id,
    AdmissionNo: d.AdmissionNo,
    FirstName: d.FirstName,
    Gender: d.Gender,
    DOB: d.DOB,
    Course: d.Course,
    FathersName: d.FathersName,
    FatherMobile: d.FatherMobile,
    District: d.District,
    HouseName: d.HouseName,
    Email: d.Email,
  }));
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
  const [data, setData] = React.useState();

  // console.log(data);
  //PassData for getAll API
  let passData1 = {
    PageIndex: 0,
    PageSize: 10,
    CourseId: "",
    Year: 2021,
    Step: 1,
  };
  let passData2 = {
    PageIndex: 0,
    PageSize: 10,
    CourseId: "",
    Year: 2021,
    Step: 2,
  };
  let passData3 = {
    PageIndex: 0,
    PageSize: 10,
    CourseId: "",
    Year: 2021,
    Step: 3,
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
  let passEdit1 = {
    Id: edit1,
  };
  let passEdit2 = {
    Id: edit2,
  };

  useEffect(() => {
    //API call for get latest 10 elements step is requested
    fetch(Domain + "/api/Student/GetAdmissionDetailsForAdmin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData1),
    })
      .then((response) => response.json())

      .then((json) => {
        // console.log("requested data", json.Data);
        setRequested(json.Data);
        if (json.Data.length == 0) setEmpty(true);
        else setEmpty(false);

        setLoading(false);
      });
    //API call for get latest 10 elements step is waiting glist
    fetch(Domain + "/api/Student/GetAdmissionDetailsForAdmin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData2),
    })
      .then((response) => response.json())

      .then((json) => {
        setWaitingList(json.Data);
        if (json.Data.length == 0) setEmpty1(true);
        else setEmpty1(false);

        setLoading(false);
      });
    //API call for get latest 10 elements step is accepted
    fetch(Domain + "/api/Student/GetAdmissionDetailsForAdmin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passData3),
    })
      .then((response) => response.json())

      .then((json) => {
        setAdmitted(json.Data);
        if (json.Data.length == 0) setEmpty2(true);
        else setEmpty2(false);
        setLoading(false);
      });

    //API call for Delete a row
    if (deletee.length != 0) {
      setDeleting(true);
      fetch(Domain + "/api/Student/DeleteAdmissionDetails/", {
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
      fetch(Domain + "/api/Student/GetAdmissionDetailsById/", {
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
            console.log(json.Data);
          }
        });
    }
    if (edit1.length != 0) {
      fetch(Domain + "/api/Student/GetAdmissionDetailsById/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passEdit1),
      })
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setEdit1([]);
            setData(json.Data);
            HandleView1();
            console.log(json.Data);
          }
        });
    }
    if (edit2.length != 0) {
      fetch(Domain + "/api/Student/GetAdmissionDetailsById/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passEdit2),
      })
        .then((response) => response.json())

        .then((json) => {
          if (json.Success) {
            setEdit2([]);
            setData(json.Data);
            HandleView2();
            console.log(json.Data);
          }
        });
    }
  }, [deletee, edit, edit1, edit2, saved, viewData]);

  useEffect(() => {
    setLoading(true);
    //console.log("Data:", data.Id);
    fetch(Domain + "/api/Student/CreateAdmissionDetails/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stepChangeData),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log("status update:", json.Data);
        // setRequested(json.Data);
        // if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
        Setview(false);
      });
  }, [stepChangeData]);
  useEffect(() => {
    setLoading(true);
    //console.log("Data:", data.Id);
    fetch(Domain + "/api/Student/CreateAdmissionDetails/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stepChangeData1),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log("status update:", json.Data);
        // setRequested(json.Data);
        // if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
        Setview(false);
      });
  }, [stepChangeData1]);
  useEffect(() => {
    setLoading(true);
    //console.log("Data:", data.Id);
    fetch(Domain + "/api/Student/CreateAdmissionDetails/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stepChangeData2),
    })
      .then((response) => response.json())

      .then((json) => {
        console.log("status update:", json.Data);
        // setRequested(json.Data);
        // if (json.Data.length == 0) setEmpty(true);
        setLoading(false);
        Setview(false);
      });
  }, [stepChangeData2]);
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

      {viewData ? (
        <LoadingOverlay active={loading} spinner text="Please Wait..">
          <Card>
            <GridContainer>
              <GridItem md={12} sm={12} lg={4}>
                <img src={Domain + data.Image} alt=".." />
              </GridItem>
              <GridItem md={12} sm={12} lg={6}>
                <h2 className={classes.title}>{data.FirstName}</h2>
                <h3 className={classes.mainPrice}>{data.Course}</h3>
                <Accordion
                  active={0}
                  activeColor="info"
                  collapses={[
                    {
                      title: "Personel Info",
                      content: (
                        <>
                          <b>Date Of Birth : </b>
                          {data.DOB}
                          <br />
                          <b> Gender : </b>
                          {data.Gender}
                          <br />
                          <b> Guardians Name :</b> {data.FathersName}
                          <br />
                          <b> Guardians Mobile :</b> {data.FatherMobile}
                          <br />
                          <b> Contact : </b>
                          {data.StudentMobile}
                          <br />
                          <b> Email : </b>
                          {data.Email}
                          <br />
                        </>
                      ),
                    },
                    {
                      title: "Educational Details",
                      content: (
                        <>
                          <b> Course : </b>
                          {data.Course}
                          <br />
                          <b> Course Code : </b>
                          {data.CourseCode}
                          <br />
                          <b> Admission Number : </b>
                          {data.AdmissionNo}
                          <br />
                          <b> Registration Number: </b>
                          {data.RegistrationNo}
                        </>
                      ),
                    },
                    {
                      title: "Academic Details",
                      content: (
                        <p>
                          Here comes the internal marks and university
                          marklists.
                        </p>
                      ),
                    },
                  ]}
                />

                <GridContainer className={classes.pullRight}>
                  <Button round onClick={HandleView}>
                    Go back
                  </Button>
                  {step == 1 ? (
                    <>
                      <Button
                        round
                        color="info"
                        onClick={() => {
                          setStepChangeData1({
                            Id: data.Id,
                            LastStatus: "Processing",
                            Step: 2,
                            StatusList: "",
                          });
                        }}
                      >
                        Add to Waiting list
                      </Button>
                      <Button
                        round
                        color="danger"
                        onClick={() => {
                          setStepChangeData2({
                            Id: data.Id,
                            LastStatus: "Rejected",
                            Step: 4,
                            StatusList: "",
                          });
                        }}
                      >
                        Reject Application
                      </Button>
                    </>
                  ) : (
                    <>
                      {step == 2 ? (
                        <>
                          <Button
                            round
                            color="success"
                            onClick={() => {
                              setStepChangeData({
                                Id: data.Id,
                                LastStatus: "Admitted",
                                Step: 3,
                                StatusList: "",
                              });
                            }}
                          >
                            Admit
                          </Button>
                          <Button
                            round
                            color="danger"
                            onClick={() => {
                              setStepChangeData2({
                                Id: data.Id,
                                LastStatus: "Rejected",
                                Step: 4,
                                StatusList: "",
                              });
                            }}
                          >
                            Reject Application
                          </Button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Button round color="success">
                            Admitted
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </GridContainer>
              </GridItem>
            </GridContainer>
          </Card>
        </LoadingOverlay>
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h3>
              <small>Select Admission status to view entries</small>
            </h3>
            <NavPills
              color="info"
              tabs={[
                {
                  tabButton: "Requested",
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Card>
                          <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>
                              List Requested Admission entries
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                              Admissions with status requested will be listed
                              below
                            </p>
                          </CardHeader>
                          <CardBody>
                            <LoadingOverlay
                              active={deleting}
                              spinner
                              text="Please Wait.."
                            >
                              {empty ? (
                                <p>empty</p>
                              ) : (
                                <Table
                                  tableHeaderColor="info"
                                  tableHead={[
                                    "",
                                    "Id",
                                    "AdmissionNo",
                                    "First Name",
                                    "Gender",
                                    "DOB",
                                    "Course",
                                    "Father's Name",
                                    "Father's Mobile",
                                    "District",
                                    "House Name",
                                    "Email",
                                    "Actions",
                                  ]}
                                  tableData={ReqData}
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
                  ),
                },
                {
                  tabButton: "Waiting List",
                  tabContent: (
                    <span>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>
                                List Of Admissions in Waiting List
                              </h4>
                              <p className={classes.cardCategoryWhite}>
                                Admissions with status Waiting list will be
                                listed below
                              </p>
                            </CardHeader>
                            <CardBody>
                              <LoadingOverlay
                                active={deleting}
                                spinner
                                text="Please Wait.."
                              >
                                {empty1 ? (
                                  <p>empty</p>
                                ) : (
                                  <Table
                                    tableHeaderColor="info"
                                    tableHead={[
                                      "",
                                      "Id",
                                      "AdmissionNo",
                                      "First Name",
                                      "Gender",
                                      "DOB",
                                      "Course",
                                      "Father's Name",
                                      "Father's Mobile",
                                      "District",
                                      "House Name",
                                      "Email",
                                      "Actions",
                                    ]}
                                    tableData={WaitData}
                                    setEdit={setEdit1}
                                    setDelete={setDelete}
                                    loading={loading}
                                  />
                                )}
                              </LoadingOverlay>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </span>
                  ),
                },
                {
                  tabButton: "Accepted",
                  tabContent: (
                    <span>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>
                                List Of Admitted entries
                              </h4>
                              <p className={classes.cardCategoryWhite}>
                                Admissions with status Admitted will be listed
                                below
                              </p>
                            </CardHeader>
                            <CardBody>
                              <LoadingOverlay
                                active={deleting}
                                spinner
                                text="Please Wait.."
                              >
                                {empty2 ? (
                                  <p>empty</p>
                                ) : (
                                  <Table
                                    tableHeaderColor="info"
                                    tableHead={[
                                      "",
                                      "Id",
                                      "AdmissionNo",
                                      "First Name",
                                      "Gender",
                                      "DOB",
                                      "Course",
                                      "Father's Name",
                                      "Father's Mobile",
                                      "District",
                                      "House Name",
                                      "Email",
                                      "Actions",
                                    ]}
                                    tableData={AdmData}
                                    setEdit={setEdit2}
                                    setDelete={setDelete}
                                    loading={loading}
                                  />
                                )}
                              </LoadingOverlay>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      )}
    </>
  );
}
