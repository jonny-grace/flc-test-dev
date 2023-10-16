import ServicesTabs from "../../components/Service/ServicesTabs";
import Carousel from "../../components/BottomCarousel/Carousel";
import Navbar from "../../components/Navbar";
import CaptionComponent from "../../components/CaptionBox";
import axios from "axios";
import Image from "next/image";

const index = ({ serviceStatic, services }) => {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden font-inter">
        <section className="md:h-[90vh]  w-full relative md:mb-10">
          <Navbar />
          <Image
            width={1000}
            height={1000}
            src={serviceStatic?.background?.data?.attributes?.url}
            alt="banner image"
            className="md:h-[90vh]    w-full object-cover mt-20"
          />

          <div className="absolute bottom-1/4  w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-28 md:ml-10 ">
              <div className="px-8 max-w-xl mt-24 mx-auto">
                <h1 className="text-white md:text-2xl text-xl font-medium lowercase">
                  {serviceStatic?.title}
                </h1>
                <p className="hidden md:block text-white mt-4  w-[365px]">
                  {serviceStatic?.description}
                </p>
              </div>
              <div className="invisible"></div>
            </div>
          </div>
        </section>

        <div className=" mt-7">
          <ServicesTabs services={services} />
        </div>
        <section className="md:my-16 mt-16 md:mt-0 md:max-w-5xl md:ml-10 mx-2 md:mx-auto">
          <Carousel />
        </section>
        <section>
          <CaptionComponent
            reviewerName={serviceStatic.reviewerName}
            reviewerTitle={serviceStatic.reviewerTitle}
            reviewerMessage={serviceStatic.reviewerMessage}
          />
        </section>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  var serviceStatic = {};
  var services = {};
  await axios
    .get("https://flc-cms.onrender.com/api/service-static?populate=*")
    .then((res) => {
      serviceStatic = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .get("https://flc-cms.onrender.com/api/services?populate=*")
    .then((res) => {
      services = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      serviceStatic,
      services,
    },
    revalidate: 3600,
  };
}
