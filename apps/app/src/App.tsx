import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar"; 
import ChannelBar from "./components/channelbar";
import Home from "./components/pages/home";
import Chat from "./components/pages/chat";
// import Counter from "./components/functions/counter";

function App() {
  console.log(firebase)
  return (

    <div className="flex">
    
      <SideBar />
      <ChannelBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
