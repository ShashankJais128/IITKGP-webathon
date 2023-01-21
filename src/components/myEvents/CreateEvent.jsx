import React, { useState } from "react";
import eveImg from "../../public/aboutimg.png";
import { myEvents } from "./EventData";

function CreateEvent() {
  const [showModal, setShowModal] = useState({ show: false });
  const [events, setEvents] = useState(myEvents);
  const [eve, setEve] = useState({
    title: "",
    subtitle: "",
    venue: "",
    description: "",
    date: "",
    teamSize: "",
    image: "",
  });

  const [show, set] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const { title, subtitle, venue, description, date, teamSize, image } = eve;
    if (
      title !== "" &&
      subtitle !== "" &&
      venue !== "" &&
      description !== "" &&
      date !== "" &&
      teamSize !== "" &&
      image !== ""
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
      subtitle: "",
      venue: "",
      description: "",
      date: "",
      teamSize: "",
      image: "",
    });
    setShowModal({ show: false });
  };

  return (
    <div>
      {/* create event */}
      <div className="bg-gray-500 h-[200px] rounded-lg p-5 mx-[5%] mb-5 flex justify-center items-center">
        <p className="text-4xl font-semibold text-center">
          Create a new Event <br />
          <button onClick={() => createEve()}>+</button>
        </p>

        <br />
      </div>

      {/* modal */}
      {showModal.show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] h-[500px] overflow-auto border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Create Event
                  </h3>
                  <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
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
                      Event Subtitle
                    </h2>
                    <input
                      className="md:text-lg w-full md:py-0.5 px-1 mx-1 rounded"
                      placeholder="Enter Event Subtitle"
                      type="text"
                      name="subtitle"
                      value={eve.subtitle}
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
                  <div className="md:py-2 px-4">
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
                  <div className="md:py-2 px-4">
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
                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close{" "}
                  </button>
                  <button
                    className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Save Changes{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default CreateEvent;
