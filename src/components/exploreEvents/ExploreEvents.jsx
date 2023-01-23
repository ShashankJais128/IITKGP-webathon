import React from "react";
import ExploreEventsCard from "./ExploreEventsCard";
import eveImg from "../../public/aboutimg.png";
import axios from "axios";
import bgex from "../../public/bgn.jpg";
import { useEffect, useState } from "react";

function ExploreEvents() {
  const [exploreEvents, setExploreEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getCompetions() {
    try {
      const resp = await axios.get("/api/competition/AllCompetition/");
      const data = resp.data;
      setLoading(false);
      setExploreEvents(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getCompetions();
  }, []);
  return (
    <>
      <div
        id="explore"
        className="bg-black bg-cover bg-bottom  pb-8"
        style={{
          backgroundImage: `url(${bgex})`,
        }}
      >
        <div className="mx-[5%]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold pt-16 text-white">
            BROWSE SQUADS
          </h1>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 justify-items-center">
            {loading && <div>loading</div>}
            {exploreEvents.length == 0 && (
              <center>
                <div className=" text-white">No squads found</div>
              </center>
            )}
            {!loading && (
              <>
                {exploreEvents.map((eve) => {
                  if (eve.show == true) {
                    return (
                      <ExploreEventsCard
                        id={eve._id}
                        title={eve.name}
                        venue={eve.venue}
                        description={eve.des}
                        date={eve.date}
                        teamSize={eve.teamSize}
                        image={eve.image}
                        postDate={eve.postDate}
                        vacancy={eve.vac}
                      />
                    );
                  }
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreEvents;
