import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import VideoList from '../../components/VideoList/VideoList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import videosJsonData from '../../data/video-details.json'



function Home() {
    // const[videoData]=useState(videosJsonData);
    // const [selectedVideo, setSelectedVideo]=useState(videosJsonData[0]);
    const[videoData, setvideoDataList]=useState([]);
    const [selectedVideo, setSelectedVideo]=useState({});
    const {id}=useParams();
  
    const handleVideoClick=(id)=>{
      const foundVideo= videoData.filter((video) => video.id === id);
      setSelectedVideo(foundVideo[0]);
    }
    
  
  
    return (
      <div>
        {/* <Header /> */}
        <VideoPlayer selectedVideo={selectedVideo} />
        <div className='container'>
          <main className='main'>
            <VideoDescription selectedVideo={selectedVideo} />
            <Comments videoData={videoData} />
          </main>
          <aside className='aside'>
            <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
  
            
          </aside>
        </div>
      </div>
    );
  
}

export default Home