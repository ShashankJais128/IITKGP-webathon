import React from "react";
import eveImg from "../../public/aboutimg.png";

function MyEventCard(props) {
  return (
    <div key={props.k} className="border-2 bg-gray-200 rounded-md">
      {/* eve card */}
      <div className="p-5 flex">
        <img
          src={props.image}
          alt=""
          className="w-[400px] h-[300px] rounded-md"
        />
        <div className="pl-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-semibold text-4xl">{props.title}</h1>
                <h2>{props.subtitle}</h2>
              </div>
              <div>
                <h1>{props.date}</h1>
                <h1>{props.venue}</h1>
              </div>
            </div>

            <br />
            <p className="text-justify pl-2">{props.description}</p>
          </div>

          <h5 className="mb-5 bg-gray-400 w-fit p-2 rounded-md">
            Vacancy: {props.teamSize}
          </h5>
        </div>
      </div>
      {/* req */}
      <div className="px-10 py-5">
        <h1 className="font-semibold text-3xl">Requests</h1>
        <br />
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between bg-rose-300 mx-10 px-4 py-2">
            <h1 className="font-semibold">Name 1</h1>
            <div className="flex space-x-5">
              <button>Accept</button>
              <button>Deny</button>
            </div>
          </div>
          <div className="flex justify-between bg-rose-300 mx-10 px-4 py-2">
            <h1 className="font-semibold">Name 2</h1>
            <div className="flex space-x-5">
              <button>Accept</button>
              <button>Deny</button>
            </div>
          </div>
          <div className="flex justify-between bg-rose-300 mx-10 px-4 py-2">
            <h1 className="font-semibold">Name 3</h1>
            <div className="flex space-x-5">
              <button>Accept</button>
              <button>Deny</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventCard;
