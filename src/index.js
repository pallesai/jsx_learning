// Import the react and react dom
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard";



// Create a react component

const App = () => {

    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure ?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Shiva"
                    timeAgo="Today at 1.00PM"
                    commentText="Awesome post"
                    avatarSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Charan"
                    timeAgo="Today at 5.55PM"
                    commentText="Really loved this post"
                    avatarSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sai Krishna"
                    timeAgo="Today at 4.15PM"
                    commentText="Nice blog post"
                    avatarSrc={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

// Take the react component and show on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
