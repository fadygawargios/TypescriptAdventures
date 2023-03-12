import React, { useState } from "react";

// should take children components
const Input: React.FC = () => {

  let [field, updateField] = useState("HELLO");

  return (
    <div className="text-black">
      <input type="text" placeholder="Send msg" value={field} onChange={(e) => updateField(field = e.target.value)}></input>
    </div>
  );
};



export default Input;
