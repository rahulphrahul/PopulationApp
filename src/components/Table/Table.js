import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import Loader from "components/Loader/Loader";

const useStyles = makeStyles(styles);

export default function CustomTable({
  tableHead,
  tableData,
  tableHeaderColor,
  setEdit,
  setDelete,
  loading,
}) {
  const classes = useStyles();
  return (
    <div className={classes.tableResponsive}>
      {loading ? (
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={1}>
            <Loader />
          </GridItem>
        </GridContainer>
      ) : (
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableHeadCell
                      }
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
                  <Button
                    onClick={() => setEdit(prop.Id)}
                    simple
                    justIcon
                    size="lg"
                    color="success"
                  >
                    <Edit />
                  </Button>
                  <Button
                    onClick={() => setDelete(prop.Id)}
                    simple
                    justIcon
                    size="lg"
                    color="danger"
                  >
                    <Close />
                  </Button>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
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
  setEdit: PropTypes.any,
  setDelete: PropTypes.any,
  loading: PropTypes.bool,
};
