import React from "react";
function DigitalCard({ title, descriptionList, Icon }) {
  return (
    <article className="digitalCard bg-white flex justify-between rounded-md border-2 border-gray-300">
      <div className="digitalCard__Icon w-1/3 bg-white text-gray-300 rounded-sm flex items-center justify-center">
        {Icon}
      </div>
      <div className=" flex-column w-full divide-y-2 divide-gray-300">
        <h3 className="text-3xl my-3 mx-auto text-center">{title}</h3>
        <ul className="digitalCard__Description mx-9 mb-4 mt-0 pt-4 space-y-1 max-w-prose">
          {descriptionList.map((item, index) => {
            const bullet = descriptionList.length > 1 ? true : false;
            return (
              <li key={index}>
                {bullet && (
                  <div className="digitalCard__Bullet inline-block mx-4 mb-1 rounded-full h-1 w-1 bg-gray-300"></div>
                )}
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
export default DigitalCard;
