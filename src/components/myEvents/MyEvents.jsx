import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Navbar from "../header/Navbar";

// Route Components
const Details = React.lazy(() => import("./Details"));
const EventView = React.lazy(() => import("./EventView"));
const Applicants = React.lazy(() => import("./Applicants"));
const MyEventsList = React.lazy(() => import("./MyEventsList"));
const AppliedSquads = React.lazy(() => import("./AppliedSquads"));

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
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <Details />
              </Suspense>
            }
          />
          <Route
            path="/myeventlist"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <MyEventsList />
              </Suspense>
            }
          />
          <Route path="/eventview/:id" element={<EventView />} />
          <Route path="/:id/applicants" element={<Applicants />} />
          <Route path="/appsquad" element={<AppliedSquads />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyEvents;
