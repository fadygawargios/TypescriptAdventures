import React from "react";
import { Link } from "react-router-dom"
import { BsChatLeftTextFill, BsFillLightningFill, BsFillCalculatorFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
// import { ObjectType } from "typescript";

const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-16 h-screen mr-5 shadow-lg bg-primary text-secondary">
      <Link to="/"> 
        <SideBarIcon icon={<TiHome size="28" />} text="Home" />
      </Link>
      <Link to="/chat">
        <SideBarIcon icon={<BsChatLeftTextFill size="23" />} text="chat" />
      </Link>
      <Link to="/calculator">
        <SideBarIcon icon={<BsFillCalculatorFill size="25" />} text="Calculator" />
      </Link>
      <Link to="/todo">
        <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Todo" />
      </Link>
      <div className="border-[2px] my-1 border-neutral-500 rounded-sm"></div>
      <Link to="/settings">
        <SideBarIcon icon={<IoIosSettings size="35" />}  text="Settings"/>
      </Link>
    </div>
  );
};

const SideBarIcon = ({icon, text}: any) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar;