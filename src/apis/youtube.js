import axios from 'axios';

const KEY = 'AIzaSyA4ht3dZxUq7eEdlPnSNhJ6vXopPERrkzs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
