// Import the react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'


// Create a react component

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
};

// Take the react component and show on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
