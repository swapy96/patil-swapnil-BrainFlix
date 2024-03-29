import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoList from "../../components/VideoList/VideoList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";

const api = "http://localhost:9999";

// const apiKey = "b113adb0-9678-4c47-9268-c50aff646fae";
// const api = "https://project-2-api.herokuapp.com";

function Home() {
  const [videoData, setVideoDataList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { id } = useParams();

  function getVideos() {
    axios.get(`${api}/videos`).then((res) => {
      console.log(res.data);
      setVideoDataList(res.data);
    });
  }

  function getVideo(id) {
    axios
      .get(`${api}/videos/${id}`)
      .then((res) => {
        setSelectedVideo(res.data);
      })
      .catch((error) => {
        console.log("video not found!!", error);
      });
  }
  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (id) {
      getVideo(id);
    } else if (videoData.length) {
      getVideo(videoData[0].id);
    }
  }, [id, videoData]);

  return (
    <div>
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="container">
        <main className="main">
          {videoData && selectedVideo.comments && (
            <VideoDescription selectedVideo={selectedVideo} />
          )}

          {videoData && selectedVideo.comments && (
            <Comments selectedVideoComments={selectedVideo.comments} />
          )}
        </main>

        <aside className="aside">
          {videoData && selectedVideo.comments && (
            <VideoList videoData={videoData} selectedVideo={selectedVideo} />
          )}
        </aside>
      </div>
    </div>
  );
}

export default Home;
