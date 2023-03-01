import { useEffect, useState } from 'react';
import axios from 'axios';
import { Key_api } from './api/apiClient';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import PageNotFound from './PageNotFound';
import Home from './pages/Home';
import Video from './pages/Video';
import VideoDetail from './pages/VideoDetail';

function App() {
  const [videos, setVideos] = useState([]);
  const handleSearch = async (search) => {
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: Key_api,
            q: search,
            part: 'snippet',
            type: 'video',
            maxResults: '10',
          },
        }
      );
      setVideos(res.data.items);
      console.log(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const search = [
      'song',
      'movie',
      'comedy',
      'computer',
      'mobile',
      'coding',
      'business',
    ];
    const input = search[Math.floor(Math.random() * search.length)];
    console.log(input);
    handleSearch(search);
  }, []);

  return (
    <div className="text-center">
      <Navbar searchVideo={handleSearch} />
      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="videos" element={<Video />} />
        <Route path="videos/:id" element={<VideoDetail />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <div>Footer</div>
    </div>
  );
}

export default App;
