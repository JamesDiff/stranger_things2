import React, {useState, useEffect} from "react";

import { useHistory } from "react-router-dom";


//import { fetchPosts } from "../Api";



const UpdatePost = ({posts, setPosts, postId, setPostId, selectedPost, headers}) => {  //do what now?
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    console.log("this is the selectedPost._id ", selectedPost._id);
    console.log("this is the title after it's out of state", title);
    console.log("this is the header ", headers)

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('postID: ', postId);
        const response = await fetch(`http://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/${selectedPost._id}`, {
            method: "PATCH",
            headers, 
            body: JSON.stringify({
                post: {
                title: title,
                description: description,
                price: price,
                willDeliver: true}
            })
            
            
            }); 
            
            const data = await response.json();
            console.log('data: ', data);
            if(data && data.title) {
                const newPosts = posts.map(post => {
                    if(post_id === postId) {
                        return data;
                    } else {
                        return post;
                    }
                });
                setPosts(newPosts);
                setTitle('');
                setBody('');
                setPostId(null);
            }

    }

    return <>
        <h3>Update Post</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <input type="text" placeholder="description" value={description} onChange={(event) => setDescription(event.target.value)} />
            <input type="text" placeholder="price" value={price} onChange={(event) => setPrice(event.target.value)} />
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </>

}

export {UpdatePost};
                
             