import React from "react";
import SideBarItem from "./SideBarItem";
import datafile from "./Sb.json";
import "./sb.css"

const SideBar = () => {
  return (
    <>
    <div className="SideBar">
      {datafile.map((item, key) => (
        <SideBarItem item={item} key={key}></SideBarItem>
      ))}
    </div>
    </>
  );
};

export default SideBar;
