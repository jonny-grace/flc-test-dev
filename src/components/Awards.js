import React from "react";

const SmallCard = ({ year, title, description }) => {
  return (
    <div className="  p-4 mb-4 w-64 sm:w-1/2 mt-4  md:w-[40%]    hover:bg-white hover:text-black">
      <div className="text-mb-2 ">{year}</div>
      <h3 className="md:text-lg text-3xl mb-1 font-bold ">{title}</h3>
      <p className="text-sm   ">{description}</p>
    </div>
  );
};

function Awards({awards,title}) {
 
  const items = [
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4 ",
    },
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4",
    },
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4",
    },
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4",
    },
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4",
    },
    {
      year: "2023",
      title: "Card 4",
      description: "Description of Card 4",
    },
    
    // Add more items as needed
  ];
  return (
    <div className=" py-8 font-inter text-black" style={{backgroundColor:'#D9D9D9'}}>
      <div className=" mx-5 md:mx-8  mb-10 flex justify-center flex-col ">
        <h1 className=" mt-5 pl-5  md:ml-36 md:text-2xl text-4xl font-bold">
          {title}
        </h1>
        <div className=" flex md:justify-center items-center  gap-2  flex-wrap">
          {awards && awards.map((item, index) => (
            <SmallCard
              key={index}
              year={item.attributes.date}
              title={item.attributes.title}
              description={item.attributes.desciption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
