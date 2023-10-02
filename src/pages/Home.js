
import Blog from "../components/Blog";
import Client from "../components/Client";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import HomePageNavBar from "../components/HomePageNavbar";
import Service from "../components/Service";
import axios from "axios";

export default function HomePage({homepageContent,services,clients,blogs}) {
  // console.log(services)

  const servicesData= services?.data;
const logo= {
  alt:homepageContent?.logo?.data?.attributes?.name,
  path:homepageContent?.logo?.data?.attributes?.url,
  height:homepageContent?.logo?.data?.attributes?.height,
  width:homepageContent?.logo.data?.attributes?.width
}
const hero= {
  alt:homepageContent?.background?.data[0]?.attributes?.name,
  path:homepageContent?.background?.data[0]?.attributes?.url,
  height:homepageContent?.background?.data[0]?.attributes?.height,
  width:homepageContent?.background.data[0]?.attributes?.width,
  title:homepageContent?.title,
  moreButton:homepageContent?.more
}
const caseStudy= {
  sectionLeftImage:homepageContent?.sectionLeftImg?.data?.attributes?.url,
  sectionLeftTitle: homepageContent?.sectionLeftTitle,
  sectionLeftDesc:homepageContent?.sectionLeftDesc,
  sectionMidImage:homepageContent?.sectionMidImg?.data?.attributes?.url,
  sectionMidTitle: homepageContent?.sectionMidTitle,
  sectionMidDesc:homepageContent?.sectionMidDesc,
  sectionRightImage:homepageContent?.sectionRightImg?.data?.attributes?.url,
  sectionRightTitle: homepageContent?.sectionRightTitle,
  sectionRightDesc:homepageContent?.sectionRightDesc,
}
const blogSectionTop={
  header: homepageContent?.blogSectionHeader,
  title:homepageContent?.blogSection
}
const clientsDetail={
  title:clients?.attributes?.title,
  desc: clients?.attributes?.description,
  logos:clients?.attributes?.images?.data
}
const serviceSection={
  title: homepageContent?.sectionTitle,
  desc:homepageContent?.sectionDescription
}

  return (
    <div className="w-full overflow-x-hidden font-inter">
      <div><HomePageNavBar logo={logo}/></div>
     <div className=" md:mx-10 md:my-7"><Hero hero={hero} /></div> 
      <Service serviceSection={serviceSection} services={servicesData}/>
      <Gallery  caseStudy={caseStudy}/>
      <Client clientsDetail={clientsDetail}/>
      <Blog blogSectionTop={blogSectionTop} blogs={blogs}/> 
    </div>
  );
}

