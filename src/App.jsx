import { useState } from 'react';
import './App.scss';
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import VideoDescription from './components/VideoDescription/VideoDescription';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import videosJsonData from './data/video-details.json'

function App() {
  const[videoData]=useState(videosJsonData);
  const [selectedVideo, setSelectedVideo]=useState(videosJsonData[0]);

  const handleVideoClick=(id)=>{
    const foundVideo= videoData.filter((video) => video.id === id);
    setSelectedVideo(foundVideo[0]);
  }
  


  return (
    <div>
      <Header />
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

export default App;
