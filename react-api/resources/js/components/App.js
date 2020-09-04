import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './TweetsComponent/Tweet';
import List from './TweetsComponent/List';
import NavBar from './NavBar';
import {getTweets} from './API/FetchTweets';
import TweetForm from './TweetFormComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Select from 'react-select';
import CreatableSelect,{ makeCreatableSelect } from 'react-select/creatable';

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
                <Select options = {options} onCreateOption />
            </div>
        );
}

export default App

ReactDOM.render(
  <App/>, document.getElementById('root'));
