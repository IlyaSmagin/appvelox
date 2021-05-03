import React, { useState } from "react";
import Calendar from "../partials/calendar";
import RenderList from "../../Api/renderList";
import { ReactComponent as Back } from "../../icons/back.svg";
import { Link } from "react-router-dom";
function ProfileAppointment({ AppointmentData }) {
  const [listExpanded, setListExpanded] = useState(false);
  return (
    <main className="pl-5 content-h-full flex flex-col lg:flex-row">
      <section className="w-full flex-col">
        <Link to="/">
          <h2 className="font-semibold m-4 flex items-center">
            <Back className="h-5 w-5 fill-current inline-block mr-2" /> Мои
            записи
          </h2>
        </Link>
        {
          <div
            onClick={() => setListExpanded(!listExpanded)}
            className="max-w-md 2xl:max-w-xl pr-8 m-2 color-light-blue cursor-pointer text-right text-sm underline"
          >
            {listExpanded ? "Свернуть список" : "Показать все записи"}
          </div>
        }

        <div className="h-5/6 overflow-y-auto flex-col space-y-5 pr-6">
          <RenderList
            list={AppointmentData}
            minSize={2}
            expanded={listExpanded}
          />
        </div>
      </section>
      <section className="w-full my-10">
        <Calendar />
      </section>
    </main>
  );
}

export default ProfileAppointment; // Don’t forget to use export default!
