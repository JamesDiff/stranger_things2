import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom'
import { findPost } from '../Api';
import { UpdatePost } from './updatePost';
import { deletePost, fetchPosts } from '../Api';
import { SendMessage } from './sendMessage';




const SinglePost = ({ match, updateMade, setUpdateMade, post, posts, setPosts, headers, updateSuccess, setUpdateSuccess, user}) => {
    const [showUpdate, setShowUpdate] = useState(false)
    // const [currentPost, setCurrentPost]= useState({})
    const currentPost = posts.find(item => item._id === match.params.postId)

    console.log("CURRENT POST, ", posts.find(item => item._id === match.params.postId));
    // debugger;
    // useEffect (() => {
    //     if(posts) {
    //         console.log("USEEFFECT RERENDER, ", posts)
    //         setCurrentPost(posts.find(item => item._id === match.params.postId))
    //     //     console.log("These are the posts, ", posts)
    //     // const postId = match.params.postId;
    //     // const foundPost = findPost(postId, posts);
    //     // console.log("THIS IS THE FOUND POST, ", foundPost);
    //     // // setcurrentPost(
    //     // //     foundPost
    //     // // )
    //     ;}
    // }, [match.params.postId, updateSuccess ])

    const history = useHistory();
    
    console.log("POSTS AND CURRENT POST, ", posts, currentPost)
    // debugger;

    
    // let dateReturned = currentPost.createdAt.substr(0, 10);
    // console.log("THIS IS THE DATE RETURNED, ", dateReturned);
    
    // debugger;
    return <div className='Single-post-render'>
        
        { posts.length > 0 && <>
        {console.log("CURRENT POST WITHIN RENDER, ", currentPost)}
        <h1> {currentPost.title} </h1>
        <p> {currentPost.description} </p>
        <h3> {currentPost.price} </h3>
        <h6> Posted {currentPost.createdAt.substr(0, 10)} </h6>
        { user && currentPost && currentPost.author && user._id !== currentPost.author._id && <Link to={`/posts/sendmessage/${currentPost._id}`}><button
            type="button"
            className="btn btn-outline-primary"
    
            // onClick={() =>{
            //     history.push("/posts/sendmessage/" + currentPost._id)

            // }}
            // onClick={ async () => {
            //     SendMessage(currentPost._id);
            //     history.push("/posts/sendmessage/" + currentPost._id)
            // }}
        
        >Message</button> </Link>}

        { user && currentPost && currentPost.author && user._id === currentPost.author._id && <button 
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
                //history.push("/posts/update/" + currentPost._id)
                setShowUpdate(true)
            }}
            > Edit
        </button>}

        { user && currentPost && currentPost.author && user._id === currentPost.author._id && <button 
            type="button"
            className="btn btn-outline-primary"
            onClick={ async () =>  {
                await deletePost(currentPost._id, headers.Authorization.split(" ")[1]);
                setUpdateMade(updateMade + 1);
                // const postsDeletedPost = await fetchPosts();
                // setPosts(postsDeletedPost);
                history.push('/')

            }}
            > Delete
        </button>}

        {showUpdate && <UpdatePost setShowUpdate = {setShowUpdate} currentPost={currentPost} updateMade={updateMade} setUpdateMade={setUpdateMade} /* currentPost={currentPost}*/ postId = {match.params.postId} setPosts={setPosts} headers={headers} setUpdateSuccess={setUpdateSuccess}/>}
       
        </>

        }
       
    </div>
    
    

}

export default SinglePost;