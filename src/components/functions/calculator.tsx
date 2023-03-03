import React, { useState } from "react";
// import ContentContainer from "../contentcontainer";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
      <div className="flex flex-col w-screen h-screen m-0 overflow-hidden text-white bg-gray-700">
        <h1 className="text-4xl text-center">You clicked me {count} times</h1>
        <div className="flex justify-center py-4 space-x-4">
          <button className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
  );
};

export default Counter;