import React from "react";
import Navbar from "../header/Navbar";
import CreateEvent from "./CreateEvent";
import MyEventsList from "./MyEventsList";
import Sidebar from "./Sidebar";
import bg from "../../public/bgn.jpg";

function MyEvents() {
  return (
    <div
      className="bg-black bg-cover bg-bottom pb-8 justify-center"
      style={{
        backgroundImage: ` url(${bg})`,
      }}
      id="myEvents"
    >
      <Navbar />
      <Sidebar />
      {/* <CreateEvent />
      <MyEventsList /> */}
    </div>
  );
}

export default MyEvents;
