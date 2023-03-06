import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar"; 
import ChannelBar from "./components/channelbar";
import Home from "./components/pages/home";
// import Counter from "./components/functions/counter";

function App() {
  return (

    <div className="flex">
    
      <SideBar />
      <ChannelBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
