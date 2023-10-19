import React, { useState } from 'react'
import "react-tabs/style/react-tabs.css";
import CustomeTabs from './CustomeTabs';
import CaseStudyCards from './CaseStudyCards';
import Navbar from './Navbar';


function CaseStudyPageComponent({ caseStudyStatic, caseStudies }) {
    const [tabs, setTab] = useState("integrated");

    return (
        <div className=" w-full overflow-x-hidden mb-16">
            <Navbar />

            <div
                className=" w-screen relative "
                style={{ backgroundColor: "#E6E6E6" }}
            >

                <div className=" max-w-screen mx-auto w-full  px-4 py-32  lg:px-3">
                    <div className="grid max-w-3xl  text-center mx-auto w-full">
                        <h1 className=" font-gothamBold text-[40px] sm:text-[75px] lg:text-[78px] text-gray-800 lowercase">
                            {caseStudyStatic.title}
                        </h1>

                        <p className="mt-10 text-center  text-gray-600">
                            {caseStudyStatic.description}
                        </p>
                    </div>
                    <div className="mt-8 w-full">

                        <CustomeTabs tabs={tabs} setTab={setTab} />
                    </div>
                    <div className=" flex flex-col  mx-16  font-inter">

                    </div>
                </div>
            </div>
            <div className=" md:mx-44">
            {tabs === "integrated" ? <CaseStudyCards caseStudies={caseStudies} /> : null}
            {tabs === "markating" ? <CaseStudyCards caseStudies={caseStudies} /> : null}
            {tabs === "events" ? <CaseStudyCards caseStudies={caseStudies} /> : null}
            {tabs === "digital" ? <CaseStudyCards caseStudies={caseStudies} /> : null}
            {tabs === "contentProduction" ? <CaseStudyCards caseStudies={caseStudies} /> : null}

            
                {/* <CaseStudyCards caseStudies={caseStudies} /> */}
            </div>
            <div className="mt-8">
                <h1 className="text-center hover:cursor-pointer font-bold  underline text-xl">load more</h1>
            </div>
        </div>

    );
}

export default CaseStudyPageComponent