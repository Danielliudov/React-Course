import React from 'react';
import data from "../data";

const posts = data;



export default class Posts extends React.Component {

    render() {
        const vote = (posts) => {
           posts.votesCount<1 ? posts.votesCount+=1: posts.votesCount-=1;
            this.forceUpdate();
        };

          return(
        <div className="posts-page">
            <h2 className="title">Posts</h2>

            {posts.map(posts => (
                <h3 key={posts.id}>
                    <h4 className="posts-title">{posts.title}</h4>
                    <div className='tagline'>
                        {posts.tagline}
                    </div>
                    <a> Votes: {posts.votesCount} </a>
                    <button onClick={() => vote(posts)
                    }>+

                    </button>

                </h3>
            ))}
        </div>
          );
    }

}
