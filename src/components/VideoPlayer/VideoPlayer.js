import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer({selectedVideo}) {
  return (
    <section className='video-Section'>

        <div className='video-player-container'>
            <video className='video-player-container__video-player' width="320" controls poster={selectedVideo.image} src=""></video>
        </div>

        

    </section>
  )
}

export default VideoPlayer