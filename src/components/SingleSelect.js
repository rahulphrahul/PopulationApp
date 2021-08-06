import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
export default function SingleSelect({ placeholder, Options, setValue }) {
  const handleChange = (e) => {
    setValue({
      CourseId: e.value,
      CourseName: e.label,
    });
  };

  return (
    <Select
      isSearchable
      placeholder={placeholder}
      options={Options}
      onChange={handleChange}
    />
  );
}
SingleSelect.propTypes = {
  placeholder: PropTypes.string,
  Options: PropTypes.array,
  setValue: PropTypes.any,
  setLabel: PropTypes.any,
};
