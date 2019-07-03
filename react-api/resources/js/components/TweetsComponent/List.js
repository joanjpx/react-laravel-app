import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

export default class List extends Component {
    render() {
        return (
            <div className="container">
                <Tweet id="1" username="Joan" description="Holaaaaaa" />
                <Tweet id="2" username="Julia" description="Hola Mundo" />
                <Tweet id="1" username="Joan" description="Holaaaaaa" />
                <Tweet id="2" username="Julia" description="Hola Mundo" />
                <Tweet id="1" username="Joan" description="Holaaaaaa" />
                <Tweet id="2" username="Julia" description="Hola Mundo" />
                <Tweet id="1" username="Joan" description="Holaaaaaa" />
                <Tweet id="2" username="Julia" description="Hola Mundo" />
            </div>
        );
    }
}

