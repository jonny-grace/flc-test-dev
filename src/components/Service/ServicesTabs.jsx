import React, { useEffect, useRef } from "react";
import { useState } from "react";
import DigitalMarketing from "./Tabs/DigitalMarketing";
import EventsAndExhibitions from "./Tabs/EventsAndExhibitions";
import ContentProduction from "./Tabs/ContentProduction";
import Marketing from "./Tabs/Marketing";

const ServicesTabs = ({ services }) => {
  // console.log('details sssssssssssssss of services',services)
  const contentRef = useRef(null);
  var marketing = {};
  var event = {};
  var contentProduction = {};
  var digitalMarketing = {};

  services &&
    services.map((service) => {
      if (
        service.attributes.name == "Marketing" ||
        service.attributes.name == "marketing"
      ) {
        marketing = service;
      } else if (
        service.attributes.name == "events & exhibition" ||
        service.attributes.name == "Events & Exhibition"
      ) {
        event = service;
      } else if (
        service.attributes.name == "Content Production" ||
        service.attributes.name == "content production"
      ) {
        contentProduction = service;
      } else if (
        service.attributes.name == "Digital Marketing" ||
        service.attributes.name == "digital marketing" ||
        service.attributes.name == "Digital"
      ) {
        digitalMarketing = service;
      }
    });

  console.log('event tab data ',digitalMarketing)

  const handleChange =(name)=>{
    setTab(name);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  }


  const [tabs, setTab] = useState("marketing");
  const [isToped, setIsToped] = useState(false);
  useEffect(() => {
      const handleScroll = (e) => {
        const secondNav = document.getElementById('someDiv');
        const distanceToTop = secondNav.getBoundingClientRect().top;
        setIsToped(distanceToTop <= 105)
        console.log(distanceToTop)
      }
      addEventListener('scroll', handleScroll)
      return () => {
        removeEventListener('scroll', handleScroll)
      }
  },[])
  return (
    <div >
    
      <div className={`${isToped && 'fixed bg-white top-[96px] z-10 '} w-full mx-auto   font-gothamBold `}   >
        
        <div  className={`flex justify-between items-center gap-2 max-w-5xl xxl:max-w-7xl mx-auto w-full px-5 `}>
          <button
            onClick={() => handleChange("marketing")}
            className="flex  md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm -mt-7 text-gray-500">01</small>
            <span
              className={
                tabs === "marketing"
                  ? `border-b-4 border-black font-gothamBold  text-sm md:text-lg xxl:text-[22px] pb-4`
                  : "font-gothamBold text-sm md:text-lg  xxl:text-[22px]  pb-4"
              }
            >
              marketing
            </span>
          </button>

          <button
            onClick={() => handleChange("events")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm  -mt-7 text-gray-500">02</small>
            <span
              className={
                tabs === "events"
                  ? `border-b-4 border-black font-gothamBold text-sm md:text-lg xxl:text-[22px] pb-4`
                  : "font-gothamBold text-sm md:text-lg xxl:text-[22px]  pb-4"
              }
            >
              events & exhibitions
            </span>
          </button>

          <button
            onClick={() => handleChange("digitalMarketing")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm  -mt-7 text-gray-500">03</small>
            <span
              className={
                tabs === "digitalMarketing"
                  ? `border-b-4 border-black font-gothamBold text-sm md:text-lg xxl:text-[22px]  pb-4`
                  : "font-gothamBold text-sm md:text-lg xxl:text-[22px] pb-4"
              }
            >
              digital marketing
            </span>
          </button>

          <button
            onClick={() => handleChange("contentProduction")}
            className="flex items-center justify-center flex-col md:flex-row gap-2"
          >
            <small className="text-sm -mt-7 text-gray-500">04</small>
            <span
              className={
                tabs === "contentProduction"
                  ? `border-b-4 border-black font-gothamBold text-sm md:text-lg xxl:text-[22px]  pb-4`
                  : "font-gothamBold text-sm md:text-lg xxl:text-[22px]  pb-4"
              }
            >
              content production
            </span>
          </button>
        </div>
        <hr className="border-t-1 border-gray-800 "></hr>
      </div>
      <section ref={contentRef} className="max-w-5xl xxl:max-w-[1300px] mx-4 md:mx-auto px-8">
        <div>
          {tabs === "marketing" ? <Marketing marketing={marketing} /> : null}
        </div>
        <div>
          {tabs === "events" ? <EventsAndExhibitions events={event} /> : null}
        </div>
        <div>
          {tabs === "digitalMarketing" ? (
            <DigitalMarketing digitalMarketing={digitalMarketing} />
          ) : null}
        </div>
        <div>
          {tabs === "contentProduction" ? (
            <ContentProduction contentProduction={contentProduction} />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ServicesTabs;
