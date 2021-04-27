import AppointmentCard from "../components/partials/appointmentCard";
function RenderList({ list, minSize, expanded }) {
  function trimList(list, renderNum = 3, expanded) {
    if (expanded) {
      return list;
    }
    return list.slice(0, renderNum);
  }
  return (
    <>
      {trimList(list, minSize, expanded).map((element, index) => (
        <AppointmentCard key={index} info={element} /> //TODO also pass element as prop
      ))}
    </>
  );
}
export default RenderList;
