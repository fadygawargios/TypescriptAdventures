import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const Input: React.FC = () => {

  let [field, updateField] = useState("");

  return (
    // position: relative and absolute to be reviewed
    <div className="flex justify-center">
      <div className="flex absolute bottom-5">
        <form>
          <input className="rounded-md h-[2em] w-[20em] pl-3 bg-gray-600" type="text" placeholder="Send msg" value={field} onChange={(e) => updateField(field = e.target.value)}></input>
          <button type="submit"><FiSend size="28"/></button>
        </form>
      </div>
    </div>
  );
};



export default Input;
