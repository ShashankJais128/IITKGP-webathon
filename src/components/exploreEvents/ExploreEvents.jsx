import React from "react";
import ExploreEventsCard from "./ExploreEventsCard";
import eveImg from "../../public/aboutimg.png";

const exploreEvents = [
  {
    title: "Event Name",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: "4",
    date: "20/3/23",
    image: eveImg,
  },
  {
    title: "Event Name2",
    subtitle: "subtitle",
    venue: "kgp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab molestiae eaque rerum reprehenderit in obcaecati architecto quibusdam soluta aliquam, dolores, unde cum iusto error rationesapiente delectus minima tempore nulla placeat doloribus enim essedicta nisi. Reiciendis tempora ex voluptate harum commodi corporisaccusantium repudiandae rerum recusandae, necessitatibus nostrumconsequuntur consectetur, doloremque possimus distinctio errorunde deserunt officiis eaque sit facilis. Similique itaqu necessitatibus tenetur? Maxime quidem quia quaerat officia eaofficiis molestias et itaque!",
    teamSize: "4",
    date: "20/3/23",
    image: eveImg,
  },
];

function ExploreEvents() {
  return (
    <div className="pt-24">
      <div className="mx-[5%]">
        <h1 className="text-6xl font-bold">Join Events</h1>
        <br />
        <br />
        <div className="flex flex-col space-y-10">
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreEvents;
