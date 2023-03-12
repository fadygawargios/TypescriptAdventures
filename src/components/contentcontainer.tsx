import React from "react";
// import Counter from "./functions/counter"; 

const ContentContainer: React.FC<any> = (props: any) => {
  return (
    <div className="flex w-full h-screen m-0 overflow-hidden text-white bg-gray-700">
      {props.children}
    </div>
  );
};

export default ContentContainer;