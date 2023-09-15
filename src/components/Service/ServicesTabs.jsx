"use client";
import React from "react";
import { useState } from "react";
import DigitalMarketing from "./Tabs/DigitalMarketing";
import EventsAndExhibitions from "./Tabs/EventsAndExhibitions";
import ContentProduction from "./Tabs/ContentProduction";
import Marketing from "./Tabs/marketing";
const ServicesTabs = () => {
  const [tabs, setTab] = useState("marketing");
  return (
    <>
      <div className=" max-w-6xl mx-auto mt-16">
        <div className="flex justify-evenly items-center text-lg  text-gray-900 capitalize">
          <button
            onClick={() => setTab("marketing")}
            className={
              tabs === "marketing"
                ? `underline underline-offset-4 font-semibold`
                : "font-medium"
            }
          >
            marketing
          </button>
          <button
            onClick={() => setTab("events")}
            className={
              tabs === "events"
                ? `underline underline-offset-4 font-semibold`
                : "font-medium"
            }
          >
            events & exhibitions
          </button>
          <button
            onClick={() => setTab("digitalMarketing")}
            className={
              tabs === "digitalMarketing"
                ? `underline underline-offset-4 font-semibold`
                : "font-medium"
            }
          >
            digital marketing
          </button>
          <button
            onClick={() => setTab("contentProduction")}
            className={
              tabs === "contentProduction"
                ? `underline underline-offset-4 font-semibold`
                : "font-medium"
            }
          >
            content production
          </button>
        </div>
      </div>
      <hr class="border-t-1 border-gray-800"></hr>
      <section className="max-w-6xl mx-auto">
        <div>{tabs === "marketing" ? <Marketing /> : null}</div>
        <div>{tabs === "events" ? <EventsAndExhibitions /> : null}</div>
        <div>{tabs === "digitalMarketing" ? <DigitalMarketing /> : null}</div>
        <div>{tabs === "contentProduction" ? <ContentProduction /> : null}</div>
      </section>
    </>
  );
};

export default ServicesTabs;
