import Blog from "../components/Blog";
import Client from "../components/Client";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Service from "../components/Service";

// import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
    <Hero />
    <Service />
    <Gallery />
    <Client />
    <Blog />
    
   </div>
  )
}
