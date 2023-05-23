import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Navbar from "../header/Navbar";

// img
import bg from "../../public/bgn.jpg";

// Route Components
const Details = React.lazy(() => import("./Details"));
const EventView = React.lazy(() => import("./EventView"));
const Applicants = React.lazy(() => import("./Applicants"));
const MyEventsList = React.lazy(() => import("./MyEventsList"));
const AppliedSquads = React.lazy(() => import("./AppliedSquads"));

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
          <Route
            path="/eventview/:id"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <EventView />
              </Suspense>
            }
          />
          <Route
            path="/:id/applicants"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <Applicants />
              </Suspense>
            }
          />
          <Route
            path="/appsquad"
            element={
              <Suspense fallback={<div> Please Wait... </div>}>
                <AppliedSquads />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default MyEvents;
