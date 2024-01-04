import React from "react";

const InputQuantity = ({ infraction, onChange = () => {} }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    infraction.quantity = Number(value);
    onChange(infraction);
  };

  return (
    <input
      min={1}
      type="number"
      defaultValue={infraction?.quantity || 1}
      onChange={handleChange}
    />
  );
};

export default InputQuantity;
