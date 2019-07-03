//Obtener Tweets
import axios from 'axios';

export function getTweets() {
  return axios.get('/api/tweet');
}

export function postTweet({ title, body }) {
  return axios({
    method: 'post',
    url: '/api/tweet',
    data: {
      title,
      body,
    }
  })
}