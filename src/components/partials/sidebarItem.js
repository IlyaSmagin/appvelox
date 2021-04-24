import React from "react";
import { Link } from "react-router-dom";
function SidebarItem({ text, link = "/", active, children }) {
  let style = active
    ? " bg-white color-purple border-l-2 border-indigo-500"
    : "";
  return (
    <Link
      to={link}
      className={"pl-5 h-12 flex items-center text-white" + style}
    >
      {children}
      <span className="ml-4 text-sm font-normal">{text}</span>
      <span className="flex-grow text-right"></span>
    </Link>
  );
}

export default SidebarItem; // Don’t forget to use export default!
