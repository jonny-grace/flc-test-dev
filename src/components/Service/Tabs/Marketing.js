import React from "react";

const Marketing = ({marketing}) => {
  const subServices=marketing && marketing.attributes.sub_services.data.map((sub)=>{
    return sub
  })
  return (
    <div className="mt-16  font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
        <div className="grid h-min max-w-lg">
          <h5 className="text-gray-600 text-xl">01</h5>
          <h5 className="text-black text-5xl py-8 font-bold">{marketing?.attributes?.name} </h5>
          <div className="grid gap-y-6  h-min">
            <p className="text-gray-600 h-min ">
              {marketing?.attributes?.description}
            </p>
            
          </div>
        </div>

        <div className="grid gap-y-8 h-min max-w-lg mx-auto">
          <div className="mt-8 invisible"></div>
          {subServices && subServices.map((subService)=>{
            return(
              <>
              <div className="grid gap-y-8 max-w-lg mx-auto">
            <h3 className="text-xl text-gray-800 font-medium">
             {subService?.attributes?.name}
            </h3>
            <p className="text-gray-600 ">
             
                 {subService?.attributes?.description}
            </p>
            
          </div>
          <hr className="border-t-1 border-gray-800 mt-2"></hr>
              </>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Marketing;
