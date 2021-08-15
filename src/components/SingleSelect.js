import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";

import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);
export default function SingleSelect({
  placeholder,
  Options,
  setValue,
  noOptionMessage,
  formControlProps,
}) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(null);
  const handleChange = (e) => {
    setValue({
      Id: e.value,
      Label: e.label,
    });
    setSelected(e);
  };

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      <Select
        value={selected}
        noOptionsMessage={() => noOptionMessage}
        isSearchable
        placeholder={placeholder}
        options={Options}
        onChange={handleChange}
      />
    </FormControl>
  );
}
SingleSelect.propTypes = {
  placeholder: PropTypes.string,
  Options: PropTypes.array,
  setValue: PropTypes.any,
  data: PropTypes.any,
  noOptionMessage: PropTypes.any,
  formControlProps: PropTypes.any,
};
