import React, {useState, useEffect} from 'react';

import {fetchPosts} from '../Api'
 

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect( async () => {
        const results = await fetchPosts();
        setPosts(results);
    }, [] );

    return (
        <div id="posts">
            {posts.map( (post, index) => {
                return(
                    <div>
                        <h1 key={index}>{post.title}</h1>
                        <h2 key={index}>{post.description}</h2>
                        <h3 key={index}>{post.price}</h3>
                    </div>
                )
            } ) }

        </div>
    )

}

export default Posts;