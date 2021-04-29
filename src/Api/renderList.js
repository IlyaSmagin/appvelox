import AppointmentCard from "../components/partials/appointmentCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function RenderList({ list, minSize, expanded }) {
  function trimList(list, renderNum = 3, expanded) {
    if (expanded) {
      return list;
    }
    return list.slice(0, renderNum);
  }
  return (
    <>
      <TransitionGroup component={null}>
        {trimList(list, minSize, expanded).map((element, index) => (
          <CSSTransition key={index} timeout={300} classNames="list">
            <AppointmentCard info={element} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
export default RenderList;
