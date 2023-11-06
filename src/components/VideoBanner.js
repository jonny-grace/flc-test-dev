// components/VideoBanner.js

import React from 'react';

const VideoBanner = ({videoLink}) => {
  return (

    <div className="video-banner">
      <video src={videoLink} type="video/mp4" autoPlay muted loop playsInline className="fullscreen-video object-top object-cover w-[100%]">
        <source  />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .video-banner {
          position: relative;
        }

        .fullscreen-video {
          object-fit: cover;
          position: absolute;
        }
      `}</style>
    </div>



  );
};

export default VideoBanner;
