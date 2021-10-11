import React, {useState, useEffect} from "react";

import {getPosts} from './components/posts';

useEffect(() => {
    getPosts();
})

const [posts, setPosts] = useState([]);  
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");



return (
    <div>
        <h1>Create a new listing</h1>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(name);

            fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer TOKEN_STRING_HERE'
                },
                body: JSON.stringify({
                    post: {
                    title: {title},
                    description: {description},
                    price: {price},
                    willDeliver: true
                    }
                }
                
                ) 
                    })
                    
                    .then(response => response.json())
                    .then(result => {
                    console.log(result);
                    setPosts(getPosts());
                    })
                        .catch(console.error);

        }}> 
        
        <input
            type="text"
            placeholder="Title"
            onChange={(event) => {
                console.log(title);
                setTitle(event.target.value);
            }} 
            value = {title} 
            />
        
        <input
            type="text"
            placeholder="Description"
            onChange={(event) => {
                console.log(description);
                setDescription(event.target.value);
            }} 
            value = {description} 
            />

        <input
            type="text"
            placeholder="Price"
            onChange={(event) => {
                console.log(price);
                setPrice(event.target.value);
            }} 
            value = {price} 
            />

        <button type="submit" >Submit</button>       

        </form>


    </div>

)