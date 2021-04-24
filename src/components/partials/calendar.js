import React from "react";
import { ReactComponent as Previous } from "../../icons/previous.svg";
import { ReactComponent as Next } from "../../icons/next.svg";
function Calendar() {
  return (
    //573 - w
    <article className="bg-purple-100 w-full mx-auto max-w-lg rounded-md">
      <div className="h-14 flex justify-center items-center text-white rounded-t-md bg-purple-500">
        <Previous className="h-3 w-3 fill-current" />
        <h3 className=" mx-5">Июнь, 2020</h3>
        <Next className="h-3 w-3 fill-current" />
      </div>
      <div className="p-4 grid grid-cols-7 justify-items-center">
        <div className="h-5 w-10 text-center">Пн</div>
        <div className="h-5 w-10 text-center">Вт</div>
        <div className="h-5 w-10 text-center">Ср</div>
        <div className="h-5 w-10 text-center">Чт</div>
        <div className="h-5 w-10 text-center">Пт</div>
        <div className="h-5 w-10 text-center">Сб</div>
        <div className="h-5 w-10 text-center">Вс</div>
      </div>
      <div className="px-4 grid grid-cols-7 font-semibold text-gray-400 text-lg">
        <div className="h-16 w-20 p-2.5">1</div>
        <div className="h-16 w-20 p-2.5">2</div>
        <div className="h-16 w-20 p-2.5">3</div>
        <div className="h-16 w-20 p-2.5">4</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">5</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">6</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">7</div>
        <div className="h-16 w-20 p-2.5 bg-white relative text-black">
          8
          <div className="w-5 h-5 absolute  bottom-2.5 right-2.5 rounded-full bg-light-blue text-white text-sm text-center">
            1
          </div>
        </div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">9</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">10</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">11</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">12</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">13</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">14</div>
        <div className="h-16 w-20 p-2.5 bg-white text-black">15</div>
        <div className="h-16 w-20 py-2 p-2.5 relative  bg-white text-black">
          {/* padding flex mb? */}
          16
          <div className="w-5 h-5 absolute  bottom-2.5 right-2.5 rounded-full bg-light-blue text-white text-sm text-center">
            2
          </div>
        </div>
        <div className="h-16 w-20 p-2.5">17</div>
        <div className="h-16 w-20 p-2.5">18</div>
        <div className="h-16 w-20 p-2.5">19</div>
        <div className="h-16 w-20 p-2.5">20</div>
        <div className="h-16 w-20 p-2.5">21</div>
        <div className="h-16 w-20 p-2.5">22</div>
        <div className="h-16 w-20 p-2.5">23</div>
        <div className="h-16 w-20 p-2.5">24</div>
        <div className="h-16 w-20 p-2.5">25</div>
        <div className="h-16 w-20 p-2.5">26</div>
        <div className="h-16 w-20 p-2.5">27</div>
        <div className="h-16 w-20 p-2.5">28</div>
        <div className="h-16 w-20 p-2.5">29</div>
        <div className="h-16 w-20 p-2.5">30</div>
        <div className="h-16 w-20 p-2.5">31</div>
      </div>
    </article>
  );
}
export default Calendar;
