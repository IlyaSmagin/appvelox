import React from "react";
import Button from "./partials/button";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as Doctors } from "../icons/doctors.svg";
import { ReactComponent as Messages } from "../icons/messages.svg";
import { ReactComponent as Tests } from "../icons/tests.svg";
import { ReactComponent as Book } from "../icons/book.svg";
import { ReactComponent as Help } from "../icons/help.svg";
import SidebarItem from "./partials/sidebarItem";
function Sidebar() {
  return (
    <aside className="sticky top-0 bg-dark-blue w-48 h-screen flex flex-col">
      <h4 className="text-white h-14 flex items-center ml-4">Логотип</h4>
      <nav className="space-y-2">
        <SidebarItem text="Профиль" active icon="../icons/heart.svg">
          <Heart className="w-5 h-5 fill-current" />
        </SidebarItem>
        <SidebarItem text="Врачи и клиники" icon="../icons/heart.svg">
          <Doctors className="w-5 h-5 fill-current" />
        </SidebarItem>
        <SidebarItem text="Сообщения" icon="../icons/heart.svg">
          <Messages className="w-5 h-5 fill-current" />
        </SidebarItem>
        <SidebarItem text="Тестирование" icon="../icons/heart.svg">
          <Tests className="w-5 h-5 fill-current" />
        </SidebarItem>
        <SidebarItem text="Полезно знать" icon="../icons/heart.svg">
          <Book className="w-5 h-5 fill-current" />
        </SidebarItem>
        <div className="mx-5 mt-4">
          <Button text="Подать заявку" />
        </div>
      </nav>
      <div className="absolute bottom-0 mt-10">
        <SidebarItem text="Помощь" icon="../icons/heart.svg">
          <Help className="w-5 h-5 fill-current" />
        </SidebarItem>
        <a className="flex items-center h-10 text-white ml-5" href="/">
          <span className="font-sm">/ / Appvelox</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar; // Don’t forget to use export default!
