import React from "react";


const RadioButton = props => {
  const {value, handler, radioSet} = props;
  return (
    <>
      <input
        type="radio"
        name={radioSet}
        value={value}
        onChange={handler}
        id={value}
      />
      <label for={value}>{value}</label>
    </>
  );
};

export default RadioButton;