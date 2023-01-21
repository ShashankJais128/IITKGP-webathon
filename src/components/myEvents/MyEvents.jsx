import React from "react";
import CreateEvent from "./CreateEvent";
import MyEventsList from "./MyEventsList";

function MyEvents() {
  return (
    <div className="pt-24" id="myEvents">
      <CreateEvent />
      <MyEventsList />
    </div>
  );
}

export default MyEvents;
