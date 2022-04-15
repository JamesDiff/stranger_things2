import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import {fetchPosts, deletePost, findPost} from '../Api';

import NewPost from './newPost';

import Search from './Search';


const Posts = ({history, updateMade, setUpdateMade, storedToken, headers, setFilteredResults, filteredResults, user, posts, setPosts}) => {
    console.log("now these ", posts);
 
    return (
        <div id="posts" className='Route-container'>
            {<NewPost headers={headers} updateMade={updateMade} setUpdateMade={setUpdateMade} setPosts={setPosts} posts={posts} user={user}/>}
            {<Search posts={posts} filteredResults={filteredResults} setFilteredResults={setFilteredResults}/>}
            <div className='Posts-container'>
 {              filteredResults ? filteredResults.map( (post, index) => {


                return(                  
                    <div className='Single-post' key={index}>                     
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <h4>{post.price}</h4> 
                            <h6>Posted {post.createdAt.substr(0, 10)}</h6>
                        </div>
                     <div className='Details-button'>      
                        <Link to={`/posts/${post._id}`}><button 
                            type="button"
                            className="btn btn-outline-primary"

                            // onClick={() => {
                            //     const newSelectedPost = findPost(post._id, posts)
                            //     setSelectedPost(newSelectedPost)
                            //     history.push("/posts/" + post._id) 
                            // }}                                 
                            > Post Details
                        </button></Link>

                     </div>
                        
                    </div>
                )
            } ) : null }

            </div>
           

        </div>
    )

}

export default Posts;