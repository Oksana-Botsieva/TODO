import React, { useState } from "react";

export const TodoList = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: Reax) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div>
      TodoList
      <input type="text" onChange={handleChange} />
    </div>
  );
};