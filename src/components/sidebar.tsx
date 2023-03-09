import React from "react";
import { Link } from "react-router-dom"
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { ObjectType } from "typescript";

const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-16 h-screen mr-5 shadow-lg bg-primary text-secondary">
      <Link to="/"> 
        <SideBarIcon icon={<FaFire size="28" />} text="Home" />
      </Link>
      <Link to="/calculator">
        <SideBarIcon icon={<BsPlus size="28" />} text="Calculator" />
      </Link>
      <Link to="/todo">
        <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Todo" />
      </Link>
      <Link to="/Counter">
        <SideBarIcon icon={<BsGearFill size="28" />}  text="Counter"/>
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