import React from "react";
import Navbar from "../../components/Navbar";
import Awards from "../../components/Awards";
import OurValues from "../../components/OurValues";
import Image from "next/image";
import AboutUsTimeline from "../../components/AboutUsTimeline";
// import Navbar from '../../components/Navbar'
const index = () => {
    return (
        <>
            <Navbar />
            <div className="  p-4 md:mx-48 mt-20 mb-10 font-inter">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Beyond Results!</h1>
                    <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        consectetur, nunc at condimentum accumsan, est ex bibendum tortor, nec
                        feugiat tellus nisi nec elit. Mauris sed libero eget justo tristique
                        semper.
                    </p>
                </div>
                <div>
                   
                    <Image
                        src="/assets/about.png"
                        alt="banner image"
                        width={1000}
                        height={1000}
                        className=" w-full h-48 md:h-96 object-cover mt-10"
                    />
                </div>
                <div>
                <p className="text-lg mb-8 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        consectetur, nunc at condimentum accumsan, est ex bibendum tortor, nec
                        feugiat tellus nisi nec elit. Mauris sed libero eget justo tristique
                        semper.
                    </p>
                </div>
                <AboutUsTimeline />
            </div>
            <OurValues />
            <Awards />
        </>
    );
};

export default index;