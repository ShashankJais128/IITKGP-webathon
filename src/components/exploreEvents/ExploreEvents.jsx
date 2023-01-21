import React from "react";
import ExploreEventsCard from "./ExploreEventsCard";
import eveImg from "../../public/aboutimg.png";
import bgex from "../../public/bgn.jpg";

const exploreEvents = [
  {
    title: "BLANKA BOTS - KSHITIJ",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: 4,
    date: "20/3/23",
    image: eveImg,
    vacancy: 2,
  },
  {
    title: "Event Name2",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: 4,
    date: "20/3/23",
    image: eveImg,
    vacancy: 2,
  },
  {
    title: "Event Name2",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: 4,
    date: "20/3/23",
    image: eveImg,
    vacancy: 2,
  },
  {
    title: "Event Name2",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: 4,
    date: "20/3/23",
    image: eveImg,
    vacancy: 2,
  },
];

function ExploreEvents() {
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
          <h1 className="text-6xl text-center font-semibold pt-16 text-white">
            BROWSE SQUADS
          </h1>
          <br />
          <br />
          <div className="grid grid-cols-3 gap-y-10 gap-x-5 justify-items-center">
            {exploreEvents.map((eve) => {
              return (
                <ExploreEventsCard
                  title={eve.title}
                  subtitle={eve.subtitle}
                  venue={eve.venue}
                  description={eve.description}
                  date={eve.date}
                  teamSize={eve.teamSize}
                  image={eve.image}
                  vacancy={eve.vacancy}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreEvents;
