import React, { useState } from "react";

const Input: React.FC = () => {

  let [field, updateField] = useState("");

  return (
    <div className="flex justify-center text-black">
      <div className="absolute bottom-5">
        <input type="text" placeholder="Send msg" value={field} onChange={(e) => updateField(field = e.target.value)}></input>
      </div>
    </div>
  );
};



export default Input;
