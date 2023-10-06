import React from "react";

const CaptionComponent = ({ reviewerName, reviewerTitle, reviewerMessage }) => {
  return (
    <div className=" mt-28 font-inter" style={{background:'#E6E6E6'}}>
      <div className="mx-14 py-16">
        <div className="bg-white p-8 rounded-lg md:mx-16 pt-9 mt-[-130px] border border-spacing-1 ">
          <div className="flex items-center mb-4 mx-8 my-5">
            <div>
              <p className="text-xl text-gray-600">
               {reviewerMessage}
              </p>

              <p className="text-gray-900 font-medium mt-5">{reviewerName}</p>
              <p className="mr-2 opacity-90 text-gray-600">{reviewerTitle}</p>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex text-gray-600 mr-16">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-8 w-7 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l1.882 5.762h6.116l-4.946 3.602 1.882 5.763-4.891-3.574-4.891 3.574 1.882-5.763-4.946-3.602h6.116z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptionComponent;
