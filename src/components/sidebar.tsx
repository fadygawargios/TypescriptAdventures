import React from "react";
import { Link } from "react-router-dom"
import { BsChatDotsFill, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaHome } from "react-icons/fa";
// import { ObjectType } from "typescript";

const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-16 h-screen mr-5 shadow-lg bg-primary text-secondary">
      <Link to="/"> 
        <SideBarIcon icon={<FaHome size="28" />} text="Home" />
      </Link>
      <Link to="/chat">
        <SideBarIcon icon={<BsChatDotsFill size="28" />} text="chat" />
      </Link>
      <Link to="/calculator">
        <SideBarIcon icon={<FaFire size="28" />} text="Calculator" />
      </Link>
      <Link to="/todo">
        <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Todo" />
      </Link>
      <div className="border-[2px] my-2 border-neutral-500 rounded-sm"></div>
      <Link to="/settings">
        <SideBarIcon icon={<BsGearFill size="28" />}  text="Settings"/>
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