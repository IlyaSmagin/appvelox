import React, { useState, useEffect } from "react";
import ProfileAppointment from "./pages/profile__appointment";
import ProfileMain from "./pages/profile__main";
import fetchAppointment from "../Api/fetch";
import { Route, Switch } from "react-router-dom";

function Main() {
  const [Appointment, setAppointment] = useState([]);
  useEffect(() => {
    fetchAppointment().then((result) => {
      setAppointment(result);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <ProfileMain AppointmentData={Appointment} />
      </Route>
      <Route exact path="/appointment">
        <ProfileAppointment AppointmentData={Appointment} />
      </Route>
    </Switch>
  );
}

export default Main; // Don’t forget to use export default!
