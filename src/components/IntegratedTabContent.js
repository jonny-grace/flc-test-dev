import React from 'react';
import Image from 'next/image';

import img from '../../public/assets/bg.jpg';

function IntegratedTabContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-screen overflow-hidden">
      <div className="mt-10">
        <div className="relative h-72 sm:h-[calc(100vh - 20rem)]">
          <Image
            src={img}
            alt="Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-5 sm:p-8 bg-[#042f2e] text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Undiz Influencers</h2>
        </div>
      </div>
      <div className="mt-10">
        <div className="p-5 sm:p-8 bg-[#78350f] text-white">
          <div className="pb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Ajmal Perfumes</h2>
            <p className="mt-6 text-base sm:text-xl font-semibold">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-white underline font-medium">
              Learn more
            </span>
          </div>
        </div>

        <div className="relative h-56 sm:h-[calc(100vh - 20rem)]">
          <Image
            src={img}
            alt="Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="col-span-2 sm:col-span-1 h-[calc(100vh - 20rem)] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="relative h-0 pb-[56.25%] sm:pb-[75%]">
            <Image
              src={img}
              alt="Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-5 sm:p-8 text-white">
            <p className="text-base sm:text-xl font-semibold">featured // events</p>
            <h2 className="text-3xl sm:text-5xl font-bold mt-3">Honor Magic Pro Launch</h2>
            <p className="mt-3 text-base sm:text-xl font-semibold">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-white underline font-medium">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegratedTabContent;