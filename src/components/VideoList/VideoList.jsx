import VideoCard from '../VideoCard/VideoCard';
import './VideoList.scss'
import React from 'react'

function VideoList(props) {
    const {videoData, selectedVideo, handleVideoClick}=props;
    return (
		<section className='video-list'>
			<p className='video-list__title'>NEXT VIDEOS</p>

			{videoData
				.filter((video) => video.id !== selectedVideo.id)
				.map((video) => (
					<VideoCard key={video.id} singleVideo={video} handleVideoClick={handleVideoClick} />
				))
			}
		</section>
	);
}

export default VideoList

