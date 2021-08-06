import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
export default function SingleSelect({
  placeholder,
  Options,
  setValue,
  noOptionMessage,
}) {
  const [selected, setSelected] = React.useState(null);
  const handleChange = (e) => {
    setValue({
      Id: e.value,
      Label: e.label,
    });
    setSelected(e);
  };

  return (
    <Select
      value={selected}
      noOptionsMessage={() => noOptionMessage}
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
  data: PropTypes.any,
  noOptionMessage: PropTypes.any,
};
