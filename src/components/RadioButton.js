import React from "react";


const RadioButton = props => {
  const {value, handler, radioSet} = props;
  return (
    <label>{value}
      <input
        type="radio"
        name={radioSet}
        value={value}
        onChange={handler}
      />
    </label>
  );
};

export default RadioButton;