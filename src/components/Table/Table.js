import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();

  const simpleButtons = [
    { color: "success", icon: Edit, link: "/" },
    { color: "danger", icon: Close, link: "/" },
  ].map((prop, key) => {
    return (
      <Button
        href={prop.link}
        simple
        justIcon
        size="sm"
        color={prop.color}
        key={key}
      >
        <prop.icon />
      </Button>
    );
  });
  const { tableHead, tableData, tableHeaderColor } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {Object.values(prop).map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                {simpleButtons}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
