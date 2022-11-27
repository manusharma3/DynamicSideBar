import React from "react";

const SideBarItem = (item) => {
  return <>
  <div className="list">
  {item.item.title}
  </div>
  </>
};

export default SideBarItem;