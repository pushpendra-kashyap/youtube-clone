import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ videos }) {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 py-2">
      <div className="grid grid-cols-4 gap-x-5 py-10 p-10">
        {videos.length > 0 &&
          videos.map((video, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/videos/${video.id.videoId}`)}
                className="cursor-pointer hover:shadow-2xl rounded-3xl py-10"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt="thumbnails"
                  className=" aspect-video h-56 w-full rounded-t-3xl  "
                />
                <p className="font-semibold p-2 text-gray-600 hover:text-gray-900">
                  {video.snippet.title}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
