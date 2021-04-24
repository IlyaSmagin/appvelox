import React from "react";
import profile from "../../img/profile.jpg";
import Button from "./button";
function AppointmentCard({ info: { title, adress, docName, docProfession } }) {
  return (
    <article className="p-5 max-w-md 2xl:max-w-xl w-full bg-white rounded-lg border-2 border-gray-200">
      <h3 className="font-bold">{title}</h3>
      <p className="w-full font-light text-sm">{adress}</p>
      <div className="mt-3 flex justify-between content-end">
        <div className="h-16 flex start">
          <img className="h-16 rounded-full" src={profile} alt="Врач" />
          <div className="ml-4">
            <h3 className="font-semibold">{docName}</h3>
            <p className="text-gray-300">{docProfession}</p>
          </div>
        </div>
        <div className="self-end">
          <Button className="h-2" text="Отменить" />
        </div>
      </div>
    </article>
  );
}
export default AppointmentCard;
