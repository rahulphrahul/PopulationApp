import React, { useEffect } from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
// import avatar from "assets/img/placeholder.jpg";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Domain } from "Domain";
import Accordion from "components/Accordion/Accordion";
import Admin from "views/Admin/Admin";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const userData = JSON.parse(window.localStorage.getItem("userdetails"));
  const [admin, setAdmin] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  console.log("userDetails:", userData);
  useEffect(() => {
    if (userData.Usertype == "Admin") {
      setAdmin(true);
    }
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Admitions Count</p>
              <h3 className={classes.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Upcoming Events</p>
              <h3 className={classes.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Enquiries</p>
              <h3 className={classes.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                See them in Enquiry Tab
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total Students</p>
              <h3 className={classes.cardTitle}>0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/* profile============================================================================================= */}
      {admin ? (
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            {edit ? <Admin id={userData.Id} /> : <></>}
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={Domain + userData.Image} alt="..." />
                </a>
              </CardAvatar>
              <CardBody>
                <span style={{ textAlign: "center" }}>
                  <h3 className={classes.title}>
                    {userData.FullName}{" "}
                    <span className={classes.proBadge}>
                      {userData.Usertype}
                    </span>
                  </h3>
                  <h6 className={classes.cardCategory}>
                    {userData.CourseName}
                  </h6>
                </span>

                <Accordion
                  active={0}
                  activeColor="info"
                  collapses={[
                    {
                      title: "Login Details",
                      content: (
                        <p>
                          <b>Username :</b> {userData.Email}
                          <br />
                          <b>Password:</b> {userData.Password}
                        </p>
                      ),
                    },
                  ]}
                />
                <Button
                  color="info"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit Profile
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={Domain + userData.Image} alt="..." />
                </a>
              </CardAvatar>
              <CardBody>
                <span style={{ textAlign: "center" }}>
                  <h3 className={classes.title}>
                    {userData.FullName}{" "}
                    <span className={classes.proBadge}>
                      {userData.UserType}
                    </span>
                  </h3>
                  <h6 className={classes.cardCategory}>
                    {userData.CourseName}
                  </h6>
                </span>

                <Accordion
                  active={0}
                  activeColor="info"
                  collapses={[
                    {
                      title: "Personel Info",
                      content: (
                        <span>
                          <b>Date Of Birth :</b> {userData.DOB}
                          <br />
                          <b>Gender : </b>
                          {userData.Gender}
                          <br />
                          <b>House Name:</b> {userData.HouseName}
                          <br />
                          <b>Contact :</b> {userData.Mobile}
                          <br />
                          <b>Email :</b> {userData.Email}
                          <br />
                        </span>
                      ),
                    },
                    {
                      title: "Other Details",
                      content: (
                        <>
                          <b>Qualifications:</b> {userData.Qualifications}
                          <br />
                          <b>Achievements :</b> {userData.Achievements}
                          <br />
                          <b>Area Of Interest :</b> {userData.AreaOfInterest}
                          <br />
                          <b>Address :</b> {userData.HouseName},{userData.City},
                          {userData.District},{userData.State},
                          {userData.Country},{userData.PostOffice},
                          {userData.PostalCode}
                          <br />
                          <b>Department Name :</b> {userData.DepartmentName}
                          <br />
                        </>
                      ),
                    },
                    {
                      title: "Login Details",
                      content: (
                        <p>
                          <b>Username :</b> {userData.Email}
                          <br />
                          <b>Password:</b> {userData.Password}
                        </p>
                      ),
                    },
                  ]}
                />
                <Button color="info" round>
                  Edit Profile
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )}
      {/* End Profile========================================================================================= */}
      {/* 
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Admissions</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today Admissions.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Staffs Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New Staffs on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={[
"","ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
