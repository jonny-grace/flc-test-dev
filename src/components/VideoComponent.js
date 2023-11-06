import React from 'react';

const VideoComponent = ({youtubeUrl}) => {
  console.log(youtubeUrl)
  const match = youtubeUrl.match(/(?:\?|&)v=([^&]+)/);
  const link = match ? match[1] : null;

  return (
    <div>
      <iframe
        className='w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1060px] h-[445px] '
        src={`https://www.youtube.com/embed/${link}?autoplay=1&controls=0&loop=1&modestbranding=1&mute=1&playlist=${link}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
