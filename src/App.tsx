import { Switch, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar";
import ChannelBar from "./components/channelbar";
import Counter from "./components/functions/counter";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar/>
      {/* <Switch>
        <Route path="/counter" component={Counter} />
      </Switch> */}
    </div>

  );
}
