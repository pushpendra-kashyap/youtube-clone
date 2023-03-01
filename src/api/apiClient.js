import axios from 'axios';

export const Key_api = 'AIzaSyAfozoVKJ0wEK_kzhfMIA-HtNI5Epzsric';

export const fetchVideo = (search) => {
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: Key_api,
      q: search,
      part: 'snippet',
      type: 'video',
      maxResults: '10',
    },
  });
};
