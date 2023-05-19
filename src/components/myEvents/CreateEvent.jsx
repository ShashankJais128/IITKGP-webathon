import React, { useState } from "react";
import eveImg from "../../public/aboutimg.png";
import bgn from "../../public/bgn.jpg";
import { myEvents } from "./EventData";

function CreateEvent({ showModal, setShowModal }) {
  const [events, setEvents] = useState(myEvents);
  const [eve, setEve] = useState({
    title: "",
    venue: "",
    description: "",
    date: "",
    teamSize: "",
    image: "",
    time: "",
    vacancy: "",
  });

  const [show, set] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const { title, venue, description, date, teamSize, image, time, vacancy } =
      eve;
    if (
      title !== "" &&
      venue !== "" &&
      description !== "" &&
      date !== "" &&
      teamSize !== "" &&
      image !== "" &&
      vacancy !== "" &&
      time !== ""
    ) {
      setEvents(events.concat(eve));
      console.log(events);
      set("");
      setEve({
        title: "",
        subtitle: "",
        venue: "",
        description: "",
        date: "",
        teamSize: "",
        image: "",
        time: "",
        vacancy: "",
      });
    } else {
      set("Please fill all the fields");
    }
  };

  const onChange = (e) => {
    setEve({ ...eve, [e.target.name]: e.target.value });
  };
  console.log(eve);

  const createEve = () => {
    setShowModal({ show: true });
  };

  const closeModal = () => {
    setEve({
      title: "",
      venue: "",
      description: "",
      date: "",
      teamSize: "",
      image: "",
      time: "",
      vacancy: "",
    });
    setShowModal({ show: false });
  };

  return (
    <div>
      {showModal.show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative bg-cover w-[90%] md:w-[60%] my-6 mx-auto max-w-3xl"
              style={{
                backgroundImage: ` url(${bgn})`,
              }}
            >
              {/*content*/}
              <div className="h-[500px] overflow-auto  rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 -b rounded-t">
                  <h3 className="text-3xl text-[#ff673a] font-semibold">
                    CREATE SQUAD
                  </h3>
                  <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">
                      Event Title
                    </h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Event Title"
                      type="text"
                      name="title"
                      value={eve.title}
                      onChange={onChange}
                    />
                  </div>

                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">
                      Team Size
                    </h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Team Size"
                      type="number"
                      name="teamSize"
                      value={eve.teamSize}
                      onChange={onChange}
                    />
                  </div>
                  {/* vacancy */}
                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">Vacancy</h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Team Size"
                      type="number"
                      name="vacancy"
                      value={eve.vacancy}
                      onChange={onChange}
                    />
                  </div>

                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">Venue</h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Venue"
                      type="text"
                      name="venue"
                      value={eve.venue}
                      onChange={onChange}
                    />
                  </div>

                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">Date</h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Date"
                      type="date"
                      name="date"
                      value={eve.date}
                      onChange={onChange}
                    />
                  </div>
                  {/* time */}
                  <div className="md:py-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">Time</h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Date"
                      type="time"
                      name="time"
                      value={eve.time}
                      onChange={onChange}
                    />
                  </div>
                  <div className="md:py-2 md:col-span-2 px-4">
                    <h2 className="md:text-xl p-1 my-1 text-white">Image</h2>
                    <div className="flex space-x-4">
                      <input
                        className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                        placeholder="Enter Image Link"
                        type="text"
                        name="image"
                        value={eve.image}
                        onChange={onChange}
                      />
                      <img
                        className="w-16 h-16 rounded text-white text-sm"
                        src={eve.image}
                        alt="image not found"
                      />
                    </div>
                  </div>
                  <div className="md:py-2 px-4 md:col-span-2">
                    <h2 className="md:text-xl p-1 my-1 text-white">
                      Description
                    </h2>
                    <textarea
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Description"
                      name="description"
                      value={eve.description}
                      onChange={onChange}
                      cols="30"
                      rows="5"
                    />
                    {show ? (
                      <p className="alertText text-red-600">{show}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-2 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close{" "}
                  </button>
                  <button
                    className="bg-[#ff673a] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Save Changes{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default CreateEvent;
