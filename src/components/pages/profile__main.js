import React from "react";
import { Link } from "react-router-dom";
import DigitalCard from "../partials/digitalCard";
import RenderList from "../../Api/renderList";
import { ReactComponent as Info } from "../../icons/info.svg";
import { ReactComponent as Analysys } from "../../icons/analysys.svg";
import { ReactComponent as Documents } from "../../icons/documents.svg";
import { ReactComponent as History } from "../../icons/history.svg";

function ProfileMain({ AppointmentData }) {
  return (
    <main className="px-5 flex-column space-y-10">
      <section>
        <h2 className="font-semibold m-4">Записи на прием</h2>
        <div className="flex space-x-4">
          <RenderList list={AppointmentData} minSize={2} expanded={false} />
          <div className="w-24 flex-shrink-0 flex-column self-center text-center">
            <div className="text-sm font-normal">Еще 3 записи</div>
            <Link to="/appointment">
              <div className="color-light-blue text-sm underline">
                Подробнее
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-semibold m-4">Электронная карта</h2>
        <div className="grid grid-cols-2 gap-2 mr-10">
          <DigitalCard
            title="Информация о пациенте"
            descriptionList={[
              "Ваши личные данные",
              "Рекомендации врачей",
              "История болезней",
            ]}
            Icon={<Info className="fill-current h-14 w-14" />}
          />
          <DigitalCard
            title="Результаты анализов"
            descriptionList={[
              "Вы можете узнать здесь результаты своих анализов",
            ]}
            Icon={<Analysys className="fill-current h-12 w-12" />}
          />
          <DigitalCard
            title="Добавить  информацию"
            descriptionList={[
              "Добавляйте в свою электронную медицинскую карту новые данные",
            ]}
            Icon={<Documents className="fill-current h-12 w-12" />}
          />
          <DigitalCard
            title="История приемов"
            descriptionList={[
              "Вся информация о полученных услугах за все время хранится здесь",
            ]}
            Icon={<History className="fill-current h-12 w-12" />}
          />
        </div>
      </section>
    </main>
  );
}

export default ProfileMain; // Don’t forget to use export default!
