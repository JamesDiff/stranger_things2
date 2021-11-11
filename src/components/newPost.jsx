import React, {useState, useEffect} from "react";

import { fetchPosts } from "../Api";



export default function NewPost ({headers, setPosts, posts}){
    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    
    return (
        <div>
            <h4>Create a new listing</h4>
            <form onSubmit={async (event) => {
                event.preventDefault();
                console.log(headers)

                fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        post: {
                        title: title,
                        description: description,
                        price: price,
                        willDeliver: true
                    }}
                
                    ) 
                    })
                    
                    .then(response => response.json())
                    .then((result) => {
                        console.log("these ", result)
                        setPosts(
                            [...posts, result.data.post]
                        )
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
}

