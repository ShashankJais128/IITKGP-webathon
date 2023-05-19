import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import EventView from "./EventView";
import Applicants from "./Applicants";
import Navbar from "../header/Navbar";
import CreateEvent from "./CreateEvent";
import MyEventsList from "./MyEventsList";
import AppliedSquads from "./AppliedSquads";

// img
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
      <div className="flex">
        <Sidebar set={setDel} />
        {showDel ? "hello" : ""}
        <Routes>
          <Route path="/myeventlist" element={<MyEventsList />} />
          <Route path="/eventview" element={<EventView />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/appsquad" element={<AppliedSquads />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyEvents;
