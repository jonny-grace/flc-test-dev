import React from 'react';

function GridView() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* First Column */}
      <div className="col-span-1">
        <div className="h-full bg-gray-200">
          <img
            src="image.jpg"
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div className="bg-gray-200">
          <p>Column 2 - Item 1</p>
        </div>
        <div className="bg-gray-200">
          <p>Column 2 - Item 2</p>
        </div>
      </div>

      {/* Third Column */}
      <div className="col-span-3 sm:col-span-2 grid grid-cols-2 gap-4">
        <div className="bg-gray-200">
          <p>Column 3 - Item 1</p>
        </div>
        <div className="bg-gray-200">
          <p>Column 3 - Item 2</p>
        </div>
      </div>
    </div>
  );
}

export default GridView;