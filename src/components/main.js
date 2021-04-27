import React, { useState, useEffect } from "react";
import ProfileAppointment from "./pages/profile__appointment";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProfileMain from "./pages/profile__main";
import fetchAppointment from "../Api/fetch";
import { Route, Switch, useLocation } from "react-router-dom";

function Main() {
  let location = useLocation();
  const [Appointment, setAppointment] = useState([]);
  useEffect(() => {
    fetchAppointment().then((result) => {
      setAppointment(result);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route exact path="/">
            <ProfileMain AppointmentData={Appointment} />
          </Route>
          <Route exact path="/appointment">
            <ProfileAppointment AppointmentData={Appointment} />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Main; // Don’t forget to use export default!
