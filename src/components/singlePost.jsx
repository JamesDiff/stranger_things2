import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom'
import { findPost } from '../Api';




const SinglePost = ({selectedPost, setSelectedPost, match, posts}) => {
    console.log("this is match: ", match);
    useEffect (() => {
        if(posts) {
        const postId = match.params.postId;
        const foundPost = findPost(postId, posts);
        
        setSelectedPost(
            foundPost
        );}
    }, [posts])


    const history = useHistory();

    
    return <div>
        <h1> {selectedPost.title} </h1>
        <p> {selectedPost.description} </p>
        <h3> {selectedPost.price} </h3>
        <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() =>{
                console.log("hey it's the message button");
                history.push("/posts/sendmessage/" + selectedPost._id)

            }}
        
        >Message</button>
        <button 
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
                console.log("hey it's the edit button");
                history.push("/posts/update/" + selectedPost._id)

            }}
            > Edit
        </button>
       
    </div>
    
    

}

export default SinglePost;