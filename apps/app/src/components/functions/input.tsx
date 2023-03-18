import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const Input: React.FC = () => {

  let [field, updateField] = useState("");

  return (
      // position: relative and absolute to be reviewed
      <div className="flex text-center justify-center absolute bottom-1 rounded-lg shadow-lg bg-gray-600 px-2 h-12 w-[79%] ml-2">
        <input className="relative font-semibold bg-transparent outline-none mr-auto pl-2" type="text" placeholder="Send msg" value={field} onChange={(e) => updateField(field = e.target.value)}></input>
        <button className="inline ml-2" type="submit"><FiSend size="28"/></button>
      </div>

  );
};



export default Input;
