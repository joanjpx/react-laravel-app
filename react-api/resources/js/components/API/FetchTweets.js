//Obtener Tweets
import axios from 'axios';

export function getTweets() {
  axios.get('/api/tweet').then( (response) => {
      return response;
    }  
  );
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