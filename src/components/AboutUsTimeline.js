import { Chrono } from "react-chrono";

const Timeline = ({ about }) => {
  return (
    <div className=" mt-10 font-inter">
      <Chrono
        items={[
          {
            // title: "2009",
            cardTitle: (
              <h2 className="text-3xl ml-3 mb-3  font-bold text-black">{about.timeline1Year}</h2>
            ),

           
            cardDetailedText: <p>{about.timeline1Description}</p>,
          },
          {
            // title: "2011",
            cardTitle: (
              <h2 className="text-3xl ml-3 mb-3  font-bold text-black">{about.timeline2Year}</h2>
            ),
            cardDetailedText: <p>{about.timeline2Description}</p>},
          {
            // title: "2013",
            cardTitle: (
              <h2 className="text-3xl ml-3 mb-3  font-bold text-black">{about.timeline3Year}</h2>
            ),
            cardDetailedText: <p>{about.timeline3Description}</p>,
          },
          {
            // title: "2021",
            cardTitle: (
              <h2 className="text-3xl ml-3 mb-3  font-bold text-black">{about.timeline4Year}</h2>
            ),
            cardDetailedText: <p>{about.timeline4Description}</p>,
          },
          {
            // title: "2023",
            cardTitle: (
              <h2 className="  text-3xl ml-3 mb-3  font-bold text-black">{about.timeline5Year}</h2>
            ),
            cardDetailedText: <p>{about.timeline5Description}</p>,
          },
        ]}
        mode="VERTICAL_ALTERNATING"
        hideControls
      />
    </div>
  );
};

export default Timeline;
