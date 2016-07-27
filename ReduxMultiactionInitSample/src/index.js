import './index.scss'
import 'loaders.css/loaders.css'
import React from 'react';
import ReactDom from 'react-dom';
import client from './client';

var LoadingIndicator = () => {
    return <div className="loading-indicator-holder">
        <div className="loader-inner square-spin inner"><div></div></div>
    </div>;
}

var HelloWorld = () => {

    if(false) {
        return <LoadingIndicator />;
    }

    return <div>
        Hello World!
    </div>;
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);