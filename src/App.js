import React, { Component } from 'react';
// import Timer from './Timer';
import ZenQuote from './ZenQuote';
// import GithubUserInfo from './GithubUserInfo';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* <GithubUserInfo username='facebook' />
                <GithubUserInfo username='marc-turner' /> */}
                <ZenQuote />
            </div>
        );
    }
}

export default App;
