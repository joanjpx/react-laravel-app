import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from "./TweetComponent";
import TweetForm from "./TweetFormComponent";
import { getTweets } from "./XHR/FetchTweets";

getTweets();

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <TweetForm/>
                <Tweet username="joan.jpx" description="Hola Mundo desde React.js! "/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
