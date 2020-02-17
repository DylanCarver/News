import React from "react";
import Select from "react-select";

const CountrySelector = props => {
  const styles = {
    container: base => ({
      ...base,
      width: 150
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
