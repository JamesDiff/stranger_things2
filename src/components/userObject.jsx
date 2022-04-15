import React, { useState, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom';
import { Link, Redirect, useHistory} from 'react-router-dom';

import { fetchObject }  from '../Api';

import { deletePost, fetchPosts } from '../Api';

import { findPost } from '../Api';


const RenderUserObject = ( {user, isLoggedIn, headers, post, posts, setPosts, storedToken, setUser } ) => {

    const history = useHistory();

    return (
        <>
       {!localStorage.getItem("token") ? <Redirect to="/"/> : (
            <div id="userobject" className='Route-container'>
            <h5>Hi, {user ? user.username : "guest"} </h5>
            <div>
                <h4>Your Messages</h4>
                <div className='Messages-container'>
                  { user && user.messages ? user.messages.map( (message) => { 
                    
                    return <>
                        <div className='Single-message'> 
                            <h4 >{ message.post.title} </h4>        
                            <p>From: { message.fromUser.username }</p>
                            <p>{ message.content }</p> 
                        </div>
                
                    </> 
                }): null }  
                </div>
                
            </div>
            <div>
                <h4 className="Listings-head">Your Listings</h4>
                <div className='User-posts-container'>
                    
                  { user ? user.posts.filter(post => post.active === true).map( (post) => {
                    return <>
                        <div className='User-single-post'>   
                        <h4>{ post.title } </h4>
                        <p>{ post.description }</p>
                        <h5>{ post.price }</h5>
                        <div className='Details-button'>      
                        <Link to={`/posts/${post._id}`}><button 
                            type="button"
                            className="btn btn-outline-primary"
                                                        
                            > Post Details
                        </button> </Link>
                        </div>

                    
                        
                        </div>
                        
                    </> 
                    }): null }

                </div>
              
            </div>
        </div>
       )}
        </>
    )
}

export {RenderUserObject};

