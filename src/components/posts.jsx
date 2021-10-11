import React, {useState, useEffect} from 'react';

import {fetchPosts} from '../Api'
 

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    useEffect( async () => {
        const results = await fetchPosts();
        setPosts(results);
    }, [] );

    return (
        <div id="posts">
            {posts.map( (post, index) => {
                return(
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <h2>{post.description}</h2>
                        <h3>{post.price}</h3>
                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => setPostId(post.id)}
                            > Edit
                        </button>
                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => deletePost(post.id)}
                            > Delete
                        </button>
                    </div>
                )
            } ) }

        </div>
    )

}

export default Posts;