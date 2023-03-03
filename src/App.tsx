import React from "react";
// import { Router, Route } from "react-router-dom";
import SideBar from "./components/sidebar"; 
import ChannelBar from "./components/channelbar";
import Counter from "./components/functions/counter";

function App() {
  return (

    <div className="flex">
    
      <SideBar />
      <ChannelBar/>
      {/* <Switch>
        <Route path="/counter" component={<Counter />} />
      </Switch>  */}
    </div>
  );
}

export default App;
