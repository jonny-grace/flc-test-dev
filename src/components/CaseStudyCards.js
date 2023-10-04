import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function CaseStudyCards({caseStudies}) {

    const [visibleRows, setVisibleRows] = useState(2);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showShowLess, setShowShowLess] = useState(false);


  const handleLoadMore = () => {
    setVisibleRows(prevVisibleRows => prevVisibleRows + 1);
  };

  const handleShowLess = () => {
    setVisibleRows(prevVisibleRows => prevVisibleRows - 1);
    setShowShowLess(false);
  };

  const totalRows = Math.ceil(caseStudies?.length / 2);


  return (
    <>
      <div class="hidden  mt-10 md:grid grid-cols-3 gap-10 px-32 lg:px-4">
        {caseStudies.slice(0, visibleRows * 2).map((caseStudy, index) => {
          const column1 = index % 2 === 0 ? caseStudy : null;
          const column2 = index % 2 === 1 ? caseStudy : null;
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          return (
            <>
              {column1 && (
                <Link
                href={{
                    pathname: '/internalCaseStudy',
                    query: { caseStudyId: caseStudy?.id }}}
                  className={` h-auto sm:h-[400px] bg-cover bg-center bg-no-repeat ${isEvenRow ? '':'col-span-2'}`}
                >
                  <div className="relative h-full">
                    <Image
                      src={column1?.attributes?.image?.data?.attributes?.url}
                      alt="Retail"
                    
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                    <div className="absolute  p-4 text-white">
                      <h3 className="text-lg font-bold">
                        {column1?.attributes?.product_type?.data?.attributes?.name}
                      </h3>
                      <p className="text-3xl font-bold">
                        {column1?.attributes?.name}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
              {column2 && (
                <Link
                href={{
                    pathname: '/internalCaseStudy',
                    query: { caseStudyId: caseStudy.id }}}
                  class={`bg-cover bg-center bg-no-repeat  ${isEvenRow ? 'col-span-2': ''}`}
                >
                  <div className="relative h-full">
                    <Image
                      src={column2?.attributes?.image?.data?.attributes?.url}
                      alt="Retail"
                  
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                    <div className="absolute  px-10 pt-3 text-white">
                      <h3 className="text-lg font-bold">
                        {column2?.attributes?.product_type?.data?.attributes?.name}
                      </h3>
                      <p className="text-3xl font-bold">
                        {column2?.attributes?.name}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </>
          );
        })}
      </div>

      <div className=" md:hidden mt-10  grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {caseStudies?.slice(0, visibleRows * 2).map((caseStudy,index)=>{
           
           return(
            <Link key={index} href={{
                pathname: '/internalCaseStudy',
                query: { caseStudyId: caseStudy.id }

              }} className="h-[400px] relative">
            <div className="relative md:w-[500px] flex h-full">
              <Image
                src={caseStudy?.attributes?.image?.data?.attributes?.url}
                alt="Your Image"
                width={1000}
                height={1000}
                className="object-cover hover:cursor-pointer w-full"
              />
  
              <div className="absolute inset-0 flex   text-white p-4">
                <div>
                  <p className="text-xl font-semibold text-left">{caseStudy?.attributes?.product_type?.data?.attributes?.name}</p>
                  <h2 className="text-4xl font-bold mt-10">{caseStudy?.attributes?.name}</h2>
                </div>
              </div>
            </div>
          </Link>
           ) 
        })}
        
        </div>

      {visibleRows < totalRows && (
        <button
          onClick={handleLoadMore}
          className="mt-10 items-center gap-x-1.5 text-black decoration-2 group-hover:underline font-bold w-full flex justify-center"
        >
          Load more
        </button>
      )}

      {visibleRows > 2 && (
        <button
          onClick={handleShowLess}
          className="mt-10 items-center gap-x-1.5 text-black decoration-2 group-hover:underline font-bold w-full flex justify-center"
        >
          Show less
        </button>
      )}
    </>
  )
}

export default CaseStudyCards