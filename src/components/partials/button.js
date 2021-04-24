import React from "react";
import { Link } from "react-router-dom";
function Button({ text, link = "/", color = "purple" }) {
  return (
    <Link to={link}>
      <div
        className={`bg-${color} flex items-center justify-center h-10 text-white rounded-md`}
      >
        <span className="mx-4 text-sm font-semibold">{text}</span>
      </div>
    </Link>
  );
}
export default Button;
