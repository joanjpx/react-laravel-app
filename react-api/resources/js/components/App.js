import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './TweetsComponent/Tweet';
import List from './TweetsComponent/List';
import {getTweets} from './API/FetchTweets';

export default class App extends Component {

    render() {
        return (
            <div>
                <List/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
