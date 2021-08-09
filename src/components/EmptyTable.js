import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function EmptyTable() {
  const classes = useStyles();
  return <div className={classes.tableResponsive}>Empty Table</div>;
}
