import { useState } from "react";
import "./app-header.css";

const AppHeader = (props) => {
  const [activeTab, setActiveTab] = useState("Patient Details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    props.onMenuSelect(tab);
  };

  return (
    <div className="app-header">
      <span className="header-title"> AH MediCare</span>
      <span
        className={activeTab === "About Us" ? "active" : ""}
        onClick={() => handleTabClick("About Us")}
      >
        About Us
      </span>
      <span
        className={activeTab === "Patient Details" ? "active" : ""}
        onClick={() => handleTabClick("Patient Details")}
      >
        Patient Details
      </span>
      <span
        className={activeTab === "Contact" ? "active" : ""}
        onClick={() => handleTabClick("Contact")}
      >
        Contact
      </span>
      <span onClick={() => console.log("Logout clicked")}>Logout</span>
    </div>
  );
};

export default AppHeader;
