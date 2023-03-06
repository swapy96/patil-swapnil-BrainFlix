import React from 'react'
import './VideoDescription.scss';
import likeIcon from '../../assets/images/icon/likes.svg'
import viewsIcon from '../../assets/images/icon/views.svg'


function VideoDescription({selectedVideo}) {
    console.log(selectedVideo)
  return (
    <section>
        <div className='video-description'>
            <h1 className='video-description__heading'>{selectedVideo.title}
            </h1>
            
            <div className='video-description__details-wrapper'>
                <div className='video-description__col1'>
                    <p className='video-description__channel-name'>By {selectedVideo.channel}</p>
                    <p className='video-description__date'>{new Date(selectedVideo.timestamp).toLocaleDateString()}</p>
                </div>
            
                <div className='video-description__col2'>
                    <div className='video-description__views-wrapper'>
                        <img className='viewicon' src={viewsIcon} alt="icon" />
                        <p className='video-description__views'>{selectedVideo.views}</p>
                    </div>

                    <div className='video-description__likes-wrapper'>
                        <img className='likeicon' src={likeIcon} alt="icon" />
                        <p className='video-description__likes'>{selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <div className='video-description__text-wrapper'>
                <p className='video-description__text'>{selectedVideo.description}</p>
            </div>
        </div>
    </section>
  )
}

export default VideoDescription