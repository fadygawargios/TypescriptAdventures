import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-primary text-secondary shadow-lg mr-5">
      <a href="/"> 
        <SideBarIcon icon={<FaFire size="28" />} text="Home" />
      </a>
      <a href="/calculator">
        <SideBarIcon icon={<BsPlus size="28" />} text="Calculator" />
      </a>
      <a href="/todo">
        <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Todo" />
      </a>
      <a href="/Counter">
        <SideBarIcon icon={<BsGearFill size="28" />}  text="Counter"/>
      </a>
    </div>
  );
};

const SideBarIcon = (icon, text) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar;