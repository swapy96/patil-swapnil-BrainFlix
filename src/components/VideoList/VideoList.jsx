import VideoCard from '../VideoCard/VideoCard';
import './VideoList.scss'
import { Link } from "react-router-dom";

import React from 'react'

function VideoList({videoData, selectedVideo}) {
	return (
		<section className='video-list'>
			<p className='video-list__title'>NEXT VIDEOS</p>

			{videoData
				.filter((video) => video.id !== selectedVideo.id)
				.map((video) => (
					<Link className='video-list__link-style' key={video.id} to={`/videos/${video.id}`}>
						<VideoCard singleVideo={video} />
					</Link>
				))
			}
		</section>
	);
}

export default VideoList

