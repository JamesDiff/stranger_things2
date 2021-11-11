import React, { useReducer } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import fetchObject  from '../Api';

const RenderUserObject = (fetchObject, post, index, user) => {
    console.log("This is the user: ", user);

    return (
        <div id="userobject">
            <div key={index} >
            <Link to="/posts"> Listings </Link>
                <h2>Messages</h2>
                { user ? user.messages.map( (message) => {
                    
                    return <>
                        <p>{ message.post.title} </p>
                        <p>{ message.fromUser.username }</p>
                        <p>{ message.content }</p>
                        
                    </> 
                }): null }
            </div>

            <div>
                <h2>Posts</h2>
                { user ? user.post.map( () => {
                    return <>
                        <p>{ } </p>
                        <p>{ }</p>
                        <p>{ }</p>
                    </> 
                }): null }

            </div>
                       
            
        
    
        </div> )

}

export {RenderUserObject};

