import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './TweetsComponent/Tweet';
import List from './TweetsComponent/List';
import NavBar from './NavBar';
import TweetForm from './TweetFormComponent';
import {getTweets,postTweet} from './API/FetchTweets';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Select from 'react-select';
//import CreatableSelect,{ makeCreatableSelect } from 'react-select/creatable';
postTweet();
getTweets();

const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];

const App = () => {
        return (
            <div>
                <NavBar/>
                <TweetForm/>
                <List/>
                
            </div>
        );
}

export default App

ReactDOM.render(
  <App/>, document.getElementById('root'));
