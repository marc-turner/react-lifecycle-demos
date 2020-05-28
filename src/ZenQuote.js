import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoaded: false,
        };
        console.log('Inside constructor');
    }
    componentDidMount() {
        console.log('Inside component did mount');
        // load data
        axios.get('https://api.github.com/zen').then((res) => {
            setTimeout(
                function () {
                    this.setState({
                        quote: res.data,
                        isLoaded: true,
                    });
                }.bind(this),
                3000
            );
        });
        // set state with said data
    }
    componentDidUpdate() {
        console.log('Inside component did update');
    }
    render() {
        console.log('Inside render');
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className='loader' />
                )}
            </div>
        );
    }
}

export default ZenQuote;
