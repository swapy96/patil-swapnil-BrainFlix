import './VideoCard.scss';

function VideoCard({singleVideo}) {
	
	return (
		<div className='VideoCard'>
			<div className='VideoCard__thumbnail'>
				<img className='VideoCard__img' src={singleVideo.image} alt={singleVideo.title} />
			</div>
			<div className='VideoCard__description'>
                <h4 className='VideoCard__title'>{singleVideo.title}</h4>
                <p className='VideoCard__channel'>{singleVideo.channel}</p>
            </div>
		</div>
	);
}

export default VideoCard;
