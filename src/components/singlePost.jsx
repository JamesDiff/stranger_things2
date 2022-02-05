import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom'
import { findPost } from '../Api';
import { UpdatePost } from './updatePost';
import { deletePost, fetchPosts } from '../Api';




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

    return <div className='Single-post-render'>
        { posts.length > 0 && <>
        <h1> {currentPost.title} </h1>
        <p> {currentPost.description} </p>
        <h3> {currentPost.price} </h3>
        { user && currentPost && currentPost.author && user._id !== currentPost.author._id && <button
            type="button"
            className="btn btn-outline-primary"
    
            // onClick={() =>{
            //     history.push("/posts/sendmessage/" + currentPost._id)

            // }}
        
        ><Link to={`/posts/sendmessage/${currentPost._id}`}>Message</Link></button> }

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

        {showUpdate && <UpdatePost setShowUpdate = {setShowUpdate} updateMade={updateMade} setUpdateMade={setUpdateMade} setCurrentPost={setCurrentPost} currentPost={currentPost} postId = {match.params.postId} setPosts={setPosts} headers={headers} setUpdateSuccess={setUpdateSuccess}/>}
       
        </>

        }
       
    </div>
    
    

}

export default SinglePost;