import React from "react"; /* 
import { Link } from "react-router-dom"; */
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Eye } from "../icons/eye.svg";
import { ReactComponent as More } from "../icons/more.svg";
import profile from "../img/profile.jpg";
function Header() {
  return (
    <header className="sticky top-0 bg-light-blue h-14 w-full px-10 flex justify-between">
      <h1 className="h-14 text-white text-3xl flex items-center">
        Мой профиль
      </h1>
      <div className="flex">
        <div className="w-24 mr-5 flex items-center justify-between">
          <Search className="w-5 h-5 fill-current" />
          <Bell className="w-5 h-5 fill-current" />
          <Eye className="w-5 h-5 fill-current" />
        </div>
        <div className="w-20 flex items-center justify-between">
          <img
            className="h-10 w-10 rounded-full border-2"
            src={profile}
            alt="Профиль"
          />
          <More className="w-5 h-5 fill-current" />
        </div>
      </div>
    </header>
  );
}

export default Header; // Don’t forget to use export default!
