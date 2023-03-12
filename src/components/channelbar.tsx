import React, { useState } from "react";

const ChannelBar: React.FC = () => {
  return (
    <div className="flex h-screen m-0 ml-16 overflow-hidden bg-gray-800 shadow-lg w-80">
        <div className="text-white w-80">
          <p className="text-center">Channels</p>
          <div>
            <p className="pl-3">HI</p>
          </div>
        </div>
      </div>
  );
};

const Dropdown = ({header, selections}: any) => {
  const [expanded, setExpanded] = useState(true);
}


export default ChannelBar;

