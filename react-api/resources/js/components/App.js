import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './TweetsComponent/Tweet';
import List from './TweetsComponent/List';
import NavBar from './NavBar';
import {getTweets} from './API/FetchTweets';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <List/>
            </div>
        );
    }
}

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));
