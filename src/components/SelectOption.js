import React from "react";


const SelectOption = props => {
  const {value, handler} = props;
  return (
    <option
      value={value}
      onChange={handler}
    >
      {value}
    </option>
  );
};

export default SelectOption;