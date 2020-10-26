// Import the react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'


// Create a react component

const App = () => {

    const buttonText = { text : 'Click Me!'};
    const labelText = 'Enter Name:';

    return (
        <div>
            <label htmlFor="name" className="label">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color: 'white'}}>
                {buttonText.text}
            </button>
            <br/>

            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Sam
                        </a>
                        <div className="metadata">
                            <span className="date">Today at 6.00PM</span>
                        </div>
                        <div className="text">Nice blog post</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

// Take the react component and show on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
