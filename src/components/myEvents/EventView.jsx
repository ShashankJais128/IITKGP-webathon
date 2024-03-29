import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// components
import ViewTeam from "./ViewTeam";

// axios
import axios from "axios";

// img
import bgex from "../../public/bgn.jpg";
import time from "../../public/time.png";
import edit from "../../public/edit.png";
import cal from "../../public/calendar.png";
import loc from "../../public/location.png";
import linkd from "../../public/linkedin.png";
import peop from "../../public/posted_by.png";

function EventView() {
  const [showModal, setShowModal] = useState({ show: false });
  const [loading, setLoading] = useState(true);
  const [showData, setData] = useState([]);

  let { id } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get(`/api/competition/getCompetition/${id}`);

    if (resp.data) {
      setData(resp.data);
      setLoading(false);
    }
  };

  const viewTeam = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
  };
  return (
    <>
      {!loading && (
        <>
          {showData ? (
            <>
              <div className="w-[75%] mx-[5%] mt-16">
                <div className="w-full relative h-[400px]">
                  <img
                    src={showData.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="flex justify-center absolute bottom-2.5 left-0 w-full">
                    <button
                      className="bg-[#28282b] px-7 py-2"
                      onClick={viewTeam}
                    >
                      <div className="flex">
                        <h1 className="text-[#ff673a] text-lg sm:text-xl font-semibold">
                          &nbsp; View Team
                        </h1>
                      </div>
                    </button>
                  </div>
                </div>
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
                        {showData.name}
                      </h1>
                      <div className="flex space-x-3 md:space-x-6">
                        <div className="flex flex-col items-center font-semibold">
                          <h1 className="text-[#ff673a] text-2xl sm:text-3xl">
                            {showData.teamSize}
                          </h1>
                          <h2 className="text-white">TEAM SIZE</h2>
                        </div>
                        <div className="flex flex-col items-center font-semibold">
                          <h1 className="text-[#ff673a] text-2xl sm:text-3xl">
                            {showData.vac}
                          </h1>
                          <h2 className="text-white">VACANCY</h2>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="flex pb-4">
                      <img src={peop} alt="" className="w-4 sm:w-6" />
                      <h1 className="text-white text-lg sm:text-xl">
                        &nbsp; Posted by:{" "}
                        <span className="underline">{showData.host.name}</span>
                        &nbsp; &nbsp;
                      </h1>
                      <a href="https://www.linkedin.com" className="w-5">
                        <img src={linkd} alt="" />
                      </a>
                    </div>
                    <div className="flex">
                      <img src={cal} alt="" className="w-4 sm:w-6" />
                      <h1 className="text-white text-lg sm:text-xl">
                        &nbsp; Posted on: <span>{showData.postDate}</span>
                        &nbsp; &nbsp;
                      </h1>
                    </div>
                    <br />
                    <br />
                    <div>
                      <p className="text-justify text-base sm:text-lg md:text-2xl text-white">
                        {showData.des}
                      </p>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-between">
                      <div className="flex text-base sm:text-xl">
                        <img src={loc} alt="" className="w-4 sm:w-6" />
                        &nbsp;
                        <h1 className="text-white">{showData.venue}</h1>
                      </div>
                      <div className="flex text-base sm:text-xl">
                        <img src={time} alt="" className="w-4 sm:w-6" />
                        &nbsp;
                        <h1 className="text-white">{showData.postTime}</h1>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center">
                      <br />
                      <Link to={`/myevents/${id}/applicants`}>
                        <button className="bg-[#ff673a] rounded-md text-white text-2xl font-semibold px-10 py-1">
                          Applicants
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}

      <ViewTeam
        showModal={showModal}
        setShowModal={setShowModal}
        data={showData.participants}
      />
    </>
  );
}

export default EventView;
