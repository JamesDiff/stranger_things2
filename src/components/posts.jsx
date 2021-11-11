import React, {useState, useEffect} from 'react';


import {fetchPosts, deletePost, findPost} from '../Api';

import NewPost from './newPost';

import Search from './Search';



const Posts = ({history, setSelectedPost, storedToken, headers, setFilteredResults, filteredResults, posts, setPosts}) => {
    console.log("now these ", posts);
 
    return (
        <div id="posts">
            {<NewPost headers={headers} setPosts={setPosts} posts={posts}/>}
            {<Search posts={posts} filteredResults={filteredResults} setFilteredResults={setFilteredResults}/>}
            {<h2>Listings</h2>}
            {filteredResults ? filteredResults.map( (post, index) => {
                return(                    
                    <div key={index}>                     
                        <h3>{post.title}</h3>
                        <h4>{post.description}</h4>
                        <h4>{post.price}</h4>
                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => deletePost(post._id, storedToken)}   //if post._id === postIdToDelete
                            > Delete
                        </button>
                        <button 
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => {
                                const newSelectedPost = findPost(post._id, posts)
                                setSelectedPost(newSelectedPost)
                                history.push("/posts/" + post._id) 
                            }}                                 
                            > Post Details
                        </button>
                    </div>
                )
            } ) : null }

        </div>
    )

}

export default Posts;