import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import Client from "../components/Client";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import HomePageNavBar from "../components/HomePageNavbar";
import Service from "../components/Service";

export default function HomePage() {

  return (
    <div className="w-full overflow-x-hidden font-inter">
      <HomePageNavBar />
      <Hero />
      <Service/>
      <Gallery />
      <Client />
      <Blog />
    </div>
  );
}

