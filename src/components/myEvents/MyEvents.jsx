import React from "react";
import Navbar from "../header/Navbar";
import CreateEvent from "./CreateEvent";
import MyEventsList from "./MyEventsList";
import EventView from "./EventView";
import Sidebar from "./Sidebar";
import bg from "../../public/bgn.jpg";
import Applicants from "./Applicants";
import AppliedSquads from "./AppliedSquads";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

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
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/myeventlist" element={<MyEventsList />} />
          <Route path="/eventview" element={<EventView />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/appsquad" element={<AppliedSquads />} />
        </Routes>
        {/* <MyEventsList /> */}
        {/* <EventView /> */}
        {/* <Applicants /> */}
        {/* <AppliedSquads /> */}
      </div>
    </div>
  );
}

export default MyEvents;
