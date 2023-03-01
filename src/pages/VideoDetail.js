import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideo, Key_api } from '../api/apiClient';
import axios from 'axios';

function VideoDetail() {
  const pramas = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [recommededVideo, setRecommededVideo] = useState([]);
  const [setShow, setHide] = useState(false);

  const show = () => {
    setHide(!setShow);
  };
  // console.log(pramas);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${pramas.id}&key=${Key_api}`
        );
        console.log(res.data.items[0]);
        setVideoDetail(res.data.items[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideoDetails();
  }, []);

  useEffect(() => {
    const getRecommededVideo = async () => {
      try {
        const res = await fetchVideo('song');
        setRecommededVideo(res.data.items);
        console.log(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getRecommededVideo();
  }, []);

  return (
    <div className="bg-gradient-to-t from-black to-gray-500 ">
      <div className="max-w-7xl container mx-auto px-3 py-10 flex gap-5 ">
        <div className="w-full lg:w-2/3">
          <iframe
            className="w-full h-96 lg:h-[500px]"
            src={`https://www.youtube.com/embed/${pramas.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {videoDetail.snippet && (
            <div className="text-white">
              <h3>{videoDetail.snippet.channelTitle}</h3>
              <h3>{videoDetail.snippet.categoryId}</h3>
              <h2 className="text-xl font-semibold py-2">
                {videoDetail.snippet.title}
              </h2>
              <h2 className="text-justify">
                <button
                  onClick={show}
                  className="bg-white text-black pl-2 pr-2 "
                >
                  {!setShow ? 'Show' : 'Hide'}
                </button>
                {setShow ? <p>{videoDetail.snippet.description} </p> : null}
              </h2>
            </div>
          )}
        </div>
        <div className="w-1/3  ">
          {recommededVideo.length > 0 && (
            <div>
              {recommededVideo.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 items-center py-3 hover:bg-yellow-300"
                  >
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="thumnails"
                      className="aspect-video w-1/3 "
                    />

                    <h3 className="text-white">{video.snippet.title}</h3>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
