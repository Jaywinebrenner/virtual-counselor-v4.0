import React, { useState } from 'react';
import ResponsivePlayer from '../ResponsivePlayer';
import { Redirect } from 'react-router-dom';
import chime3 from '../../media/chime3.mp3';
import ReactHowler from 'react-howler';
import roomtone from '../../media/roomtone4.mp3';
import VideoHeader from '../VideoHeader';
import '../../styles/video.css';

// I recognize this is an unusual format.... so, shall we begin?

const Video2 = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  if (watchComplete === true) {
    return <Redirect to='./Questions2' />
  }

  const handleWatchComplete = ({played}) =>  {
    if(played >= 0.99 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  return (
    <div className='lesson-wrapper'>
      <VideoHeader />

      <style jsx>{`

          .lesson-wrapper{
            background-color: black;
            text-align: center;
            height: 1100px;
          }

          `}</style>

        <ResponsivePlayer
          url='https://virtual-counselor-video.s3-us-west-2.amazonaws.com/1.intro.2.mp4'
          onProgress={handleWatchComplete}
          />

          <ReactHowler
      src={chime3}
      playing={true}
      volume={.2}
    />
    <ReactHowler
src={roomtone}
playing={true}
volume={.5}
loop={true}
/>

      </div>
    );
  }

  export default Video2;
