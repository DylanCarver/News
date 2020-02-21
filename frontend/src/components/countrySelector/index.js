import React from "react";
import Select from "react-select";

const CountrySelector = props => {
  const styles = {
    container: base => ({
      ...base,
      width: 100,
      margin: "2px 25px"
    })
  };
  const options = [
    { value: "us", label: "US" },
    { value: "nl", label: "NL" }
  ];
  return (
    <Select
      styles={styles}
      defaultValue={options[0]}
      options={options}
      {...props}
    />
  );
};

export default CountrySelector;
