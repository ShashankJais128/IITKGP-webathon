import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import CreateEvent from "./CreateEvent";

// img
import bgex from "../../public/bgn.jpg";
import time from "../../public/time.png";
import rect from "../../public/Rect.png";
import edit from "../../public/edit.png";
import cal from "../../public/calendar.png";
import loc from "../../public/location.png";
import linkd from "../../public/linkedin.png";
import peop from "../../public/posted_by.png";

function EventView() {
  const [showModal, setShowModal] = useState({ show: false });

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
  };

  return (
    <>
      <div className="w-[75%] mx-[5%] mt-16">
        <img src={rect} alt="" />
        <div
          className="bg-black w-full bg-cover bg-bottom pb-8 flex justify-center"
          style={{
            backgroundImage: ` url(${bgex})`,
          }}
        >
          <div className="bg-[#28282B] pt-5 pb-10 px-6 sm:px-12 ">
            <div className="w-full flex flex-row-reverse pb-5">
              <button onClick={handleClick}>
                <img src={edit} alt="" className="w-6" />
              </button>
            </div>
            <div className="flex justify-between ">
              <h1 className="text-[#ff673a] text-3xl sm:text-4xl font-bold">
                BLANKA BOTS - KSHITIJ
              </h1>
              <div className="flex space-x-3 md:space-x-6">
                <div className="flex flex-col items-center font-semibold">
                  <h1 className="text-[#ff673a] text-2xl sm:text-3xl">7</h1>
                  <h2 className="text-white">TEAM SIZE</h2>
                </div>
                <div className="flex flex-col items-center font-semibold">
                  <h1 className="text-[#ff673a] text-2xl sm:text-3xl">4</h1>
                  <h2 className="text-white">VACANCY</h2>
                </div>
              </div>
            </div>
            <br />
            <div className="flex pb-4">
              <img src={peop} alt="" className="w-4 sm:w-6" />
              <h1 className="text-white text-lg sm:text-xl">
                &nbsp; Posted by:{" "}
                <span className="underline">Rishav Singh</span>
                &nbsp; &nbsp;
              </h1>
              <a href="https://www.linkedin.com" className="w-5">
                <img src={linkd} alt="" />
              </a>
            </div>
            <div className="flex">
              <img src={cal} alt="" className="w-4 sm:w-6" />
              <h1 className="text-white text-lg sm:text-xl">
                &nbsp; Posted on: <span>23rd march 23</span>
                &nbsp; &nbsp;
              </h1>
            </div>
            <br />
            <br />
            <div>
              <p className="text-justify text-base sm:text-lg md:text-2xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aliquam mollitia temporibus? Ratione at enim sed
                laudantium blanditiis consequatur, dolore non. Laboriosam nam
                reprehenderit, a facere eaque modi sit placeat vero perferendis
                explicabo, tenetur, ea odit sint doloribus facilis. Saepe quidem
                sed aspernatur officiis nesciunt labore deserunt cupiditate
                aperiam ipsum impedit vitae dolores rem ipsa, mollitia,
                quisquam, excepturi nam dignissimos! Eaque suscipit odio dolorem
                enim nesciunt reprehenderit sequi, reiciendis, optio inventore
                dolorum autem mollitia. Assumenda voluptate provident voluptatum
                beatae culpa asperiores iusto dicta maiores reprehenderit nulla
                quisquam officiis ducimus, earum quasi sequi veniam eligendi,
                quae expedita dolorum? Saepe, iure autem!
              </p>
            </div>
            <br />
            <br />
            <div className="flex justify-between">
              <div className="flex text-base sm:text-xl">
                <img src={loc} alt="" className="w-4 sm:w-6" />
                &nbsp;
                <h1 className="text-white">Kharagpur, Somewhere, India</h1>
              </div>
              <div className="flex text-base sm:text-xl">
                <img src={time} alt="" className="w-4 sm:w-6" />
                &nbsp;
                <h1 className="text-white">22:45</h1>
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center">
              <br />
              <Link to="/myevents/applicants">
                <button className="bg-[#ff673a] text-white text-2xl font-semibold px-10 py-1">
                  Applicants
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CreateEvent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default EventView;
