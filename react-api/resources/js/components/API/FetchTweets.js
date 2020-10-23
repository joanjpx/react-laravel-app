//Obtener Tweets
import axios from 'axios';

export function getTweets() {
  axios.get('/api/tweet').then( (response) => {
      return response;
    }  
  );
}

export function postTweet() {
  return axios.post(
      '/api/tweet',
      {
        "user_id":1,
        "title": "Hola",
        "body": "Mundo"
      }
  )
}