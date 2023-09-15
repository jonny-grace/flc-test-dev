import React, { useState } from "react";

const BeyondResults = () => {
  const [images, setImages] = useState([
    { src: "/bulk-image.jpeg", title: "Title 1" },
    { src: "/bulk-image.jpeg", title: "Title 2" },
    { src: "/bulk-image.jpeg", title: "Title 3" },
    { src: "/bulk-image.jpeg", title: "Title 4" },
  ]);

  const loadMore = () => {
    setImages((prevImages) => [
      ...prevImages,
      { src: "/bulk-image.jpeg", title: "Title 5" },
      { src: "/bulk-image.jpeg", title: "Title 6" },
      { src: "/bulk-image.jpeg", title: "Title 7" },
      { src: "/bulk-image.jpeg", title: "Title 8" },
    ]);
  };

  const containerWidth = 1380;
  const firstImageWidth = (containerWidth - 4) / 2;
  const secondImageWidth = containerWidth - firstImageWidth - 4;

  return (
    <div className="flex justify-center bg-red-500 mx-56">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${
              index % 4 === 1 || index % 4 === 2
                ? `md:w-${secondImageWidth}`
                : `md:w-${firstImageWidth}`
            }`}
          >
            <img
              src={image.src}
              alt=""
              className="object-cover w-full h-64 md:h-80"
            />
            <div className="absolute top-0 bg-black bg-opacity-50 text-white p-2 w-full">
              {image.title}
            </div>
          </div>
        ))}
        <button
          onClick={loadMore}
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default BeyondResults;
