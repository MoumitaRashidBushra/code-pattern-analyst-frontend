import { useState } from "react";
import PageContent from "../PageContent/PageContent";
import SideBarNav from "./SideBarNav/SideBarNav";

const Sideber = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 max-h-full left-0 bg-base-200 h-full w-64 z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideBarNav></SideBarNav>
      </div>

      {/* Main Page Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-80" : "ml-0"
        }`}
      >
        <PageContent toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sideber;
