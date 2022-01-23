import React, { useState } from "react";
import ChartistGraph from "react-chartist";
import UserProfile from "views/UserProfile/UserProfile";
import { makeStyles } from "@material-ui/core/styles";

import AccessTime from "@material-ui/icons/AccessTime";

// @material-ui/core

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  var delays2 = 80,
    durations2 = 500;
  const [populationChartData, setPopulation] = useState();
  fetch(
    "https://6998bab9-6d84-4087-b84d-b4edf592c654.mock.pstmn.io/getPopulation/",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())

    .then((json) => {
      // console.log(json.Data);

      if (json.Success) {
        setPopulation(json.Data);
      } else {
        setInvalid(true);
      }
    });
  const populationChart = {
    data: populationChartData,
    options: {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 1000,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0,
      },
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ],
    animation: {
      draw: function (data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };
  return (
    <div>
      <UserProfile />
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={populationChart.data}
                type="Bar"
                options={populationChart.options}
                responsiveOptions={populationChart.responsiveOptions}
                listener={populationChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Population Chart of India</h4>
              <p className={classes.cardCategory}>
                Data fetched from Postman mock api
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated just now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
