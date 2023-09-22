import React from "react";
import { useState } from "react";
import DigitalMarketing from "./Tabs/DigitalMarketing";
import EventsAndExhibitions from "./Tabs/EventsAndExhibitions";
import ContentProduction from "./Tabs/ContentProduction";
import Marketing from "./Tabs/Marketing";
import CaptionComponent from "../CaptionBox";

const ServicesTabs = () => {
  const [tabs, setTab] = useState("marketing");

  return (
    <>
      <div className="w-full mx-auto md:mt-20 font-inter">
        <div className="flex justify-between items-center mx-32 gap-2">
          <button
            onClick={() => setTab("marketing")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm -mt-4 text-gray-500">01</small>
            <span
              className={
                tabs === "marketing"
                  ? `underline underline-offset-4 font-bold text-sm sm:text-lg mt-1`
                  : "font-medium text-sm sm:text-lg"
              }
            >
              marketing
            </span>
          </button>

          <button
            onClick={() => setTab("events")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm sm:text-lg -mt-4 text-gray-500">02</small>
            <span
              className={
                tabs === "events"
                  ? `underline underline-offset-4 font-bold text-sm sm:text-lg mt-1`
                  : "font-medium text-sm sm:text-lg"
              }
            >
              events & exhibitions
            </span>
          </button>

          <button
            onClick={() => setTab("digitalMarketing")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm sm:text-lg -mt-4 text-gray-500">03</small>
            <span
              className={
                tabs === "digitalMarketing"
                  ? `underline underline-offset-4 font-bold text-sm sm:text-lg mt-1`
                  : "font-medium text-sm sm:text-lg"
              }
            >
              digital marketing
            </span>
          </button>

          <button
            onClick={() => setTab("contentProduction")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm -mt-4 text-gray-500">04</small>
            <span
              className={
                tabs === "contentProduction"
                  ? `underline underline-offset-4 font-bold text-sm sm:text-lg mt-1`
                  : "font-medium text-sm sm:text-lg"
              }
            >
              content production
            </span>
          </button>
        </div>
        <hr className="border-t-1 border-gray-800 mt-2"></hr>
      </div>
      <section className="max-w-5xl mx-auto">
        <div>{tabs === "marketing" ? <Marketing /> : null}</div>
        <div>{tabs === "events" ? <EventsAndExhibitions /> : null}</div>
        <div>{tabs === "digitalMarketing" ? <DigitalMarketing /> : null}</div>
        <div>{tabs === "contentProduction" ? <ContentProduction /> : null}</div>
      </section>
    </>
  );
};

export default ServicesTabs;