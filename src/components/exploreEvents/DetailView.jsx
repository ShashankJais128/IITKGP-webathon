import React from "react";
import rect from "../../public/Rect.png";
import Navbar from "../header/Navbar";
import bgex from "../../public/bgn.jpg";
import peop from "../../public/posted_by.png";
import linkd from "../../public/linkedin.png";
import cal from "../../public/calendar.png";
import loc from "../../public/location.png";
import time from "../../public/time.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function DetailView() {
  const [Event, setEvent] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  async function getCompetion() {
    try {
      const resp = await axios.get("/api/competition/AllCompetition/");
      const data = resp.data;
      setLoading(false);
      setEvent(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getCompetion();
  }, [id]);
  return (
    <>
      <div
        className="bg-black bg-top bg-cover h-[75vh]  "
        style={{
          backgroundImage: ` url(${rect})`,
        }}
      >
        <Navbar />
      </div>
      <div
        className="bg-black bg-cover bg-bottom relative h-[650px] pb-8 flex justify-center"
        style={{
          backgroundImage: ` url(${bgex})`,
        }}
      >
        <div className="w-[90%] bg-[#28282B]  py-10 px-12 absolute -top-20">
          <div className="flex justify-between">
            <h1 className="text-[#ff673a] text-4xl font-bold">
              BLANKA BOTS - KSHITIJ
            </h1>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center font-semibold">
                <h1 className="text-[#ff673a] text-3xl">7</h1>
                <h2 className="text-white">TEAM SIZE</h2>
              </div>
              <div className="flex flex-col items-center font-semibold">
                <h1 className="text-[#ff673a] text-3xl">4</h1>
                <h2 className="text-white">VACANCY</h2>
              </div>
            </div>
          </div>
          <div className="flex pb-4">
            <img src={peop} alt="" className="w-6" />
            <h1 className="text-white text-xl">
              &nbsp; Posted by: <span className="underline">Rishav Singh</span>
              &nbsp; &nbsp;
            </h1>
            <a href="https://www.linkedin.com" className="w-5">
              <img src={linkd} alt="" />
            </a>
          </div>
          <div className="flex">
            <img src={cal} alt="" className="w-6" />
            <h1 className="text-white text-xl">
              &nbsp; Posted on: <span>23rd march 23</span>
              &nbsp; &nbsp;
            </h1>
          </div>
          <br />
          <br />
          <div>
            <p className="text-justify text-2xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aliquam mollitia temporibus? Ratione at enim sed
              laudantium blanditiis consequatur, dolore non. Laboriosam nam
              reprehenderit, a facere eaque modi sit placeat vero perferendis
              explicabo, tenetur, ea odit sint doloribus facilis. Saepe quidem
              sed aspernatur officiis nesciunt labore deserunt cupiditate
              aperiam ipsum impedit vitae dolores rem ipsa, mollitia, quisquam,
              excepturi nam dignissimos! Eaque suscipit odio dolorem enim
              nesciunt reprehenderit sequi, reiciendis, optio inventore dolorum
              autem mollitia. Assumenda voluptate provident voluptatum beatae
              culpa asperiores iusto dicta maiores reprehenderit nulla quisquam
              officiis ducimus, earum quasi sequi veniam eligendi, quae expedita
              dolorum? Saepe, iure autem!
            </p>
          </div>
          <br />
          <br />
          <div className="flex justify-between">
            <div className="flex text-xl">
              <img src={loc} alt="" className="w-6" />
              &nbsp;
              <h1 className="text-white">Kharagpur, Somewhere, India</h1>
            </div>
            <div className="flex text-xl">
              <img src={time} alt="" className="w-6" />
              &nbsp;
              <h1 className="text-white">22:45</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-center">
            <br />
            <button
              className="bg-[#ff673a] text-white text-2xl font-semibold px-10 py-1"
              onClick={() => setShowModal(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="border-0 p-4 rounded-lg bg-cover shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bgex})`,
                }}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex justify-between w-full">
                    <h3 className="text-3xl font-semibold text-[#ff673a]">
                      BLANKA BOTS - KSHITIJ
                    </h3>
                    <button type="button" onClick={() => setShowModal(false)}>
                      <h1 className="text-white text-3xl">X</h1>
                    </button>
                  </div>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex">
                    <img src={cal} alt="" className="w-5" />
                    <h1 className="text-white text-lg">
                      &nbsp; Posted on: <span>23rd march 23</span>
                      &nbsp; &nbsp;
                    </h1>
                  </div>
                  <br />
                  <h1 className="text-white text-xl mb-2">Message</h1>
                  <textarea
                    className="w-full bg-[#28282B] text-white p-2"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="write your message here..."
                  ></textarea>
                </div>
                {/*footer*/}
                <div className="flex justify-center items-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#ff673a] text-white text-2xl font-semibold px-10 py-1">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DetailView;
