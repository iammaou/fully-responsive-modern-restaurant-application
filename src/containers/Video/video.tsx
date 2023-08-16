import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import './video.css';

const Video = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(vidRef.current != null){
      if(playVideo){
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  }

  return(
    <div className='app__video'>
      <video 
        src='./assets/meal.mp4'
        ref={vidRef}
        typeof='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay'>
        <div className='app__video-overlay_circle' onClick={handleVideo}>
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>
          }
        </div>
      </div>
    </div>
  )
};

export default Video;