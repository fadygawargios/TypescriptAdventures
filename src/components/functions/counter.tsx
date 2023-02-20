import { useState } from "react";
import ContentContainer from "../contentcontainer";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
      <div className="flex flex-col bg-gray-700 m-0 h-screen w-screen overflow-hidden text-white">
        <h1 className="text-center text-4xl">You clicked me {count} times</h1>
        <div className="flex justify-center space-x-4 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
  );
};

export default Counter;