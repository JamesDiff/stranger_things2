import React, { useState, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { fetchObject }  from '../Api';



const RenderUserObject = ( {user, isLoggedIn, headers, storesToken, } ) => {
    console.log("This is the user: ", user);
    //const [object, setObject] = useState(null);


    return (
        <div id="userobject">

            <h2>Hi, {user ? user.username : "guest"} </h2>
            <div>
            <Link to="/posts"> Listings </Link>
                <h2>Your Messages</h2>
                { user && user.messages ? user.messages.map( (message) => { 
                    
                    return <>
                        <h3 >{ message.post.title} </h3>        {/*labels --what's the post title, whats the content, is it avaiable for delivery?*/}
                        <p>From: { message.fromUser.username }</p>
                        <p>{ message.content }</p>
                        
                    </> 
                }): null }
            </div>

            <div>
                <h2>Your Listings</h2>
                { user ? user.posts.map( (post) => {
                    
                    return <>
                        <h3>{ post.title } </h3>
                        <p>{ post.description }</p>
                        <h5>{ post.price }</h5>
                        <></>
                        { /* post ? post.messages.map ( (message) => {
                            return (
                                <>
                                    <p> From:{ message.fromUser.username }</p> 
                                    <p>{ message.content }</p>
                                </>
                            )

                        }) : null */ }
                        
                    </> 
                }): null }

            </div>
    
        </div> )

}

export {RenderUserObject};

