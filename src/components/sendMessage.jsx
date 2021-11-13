import React, {useState, useEffect} from 'react';


const SendMessage = ({post, posts, setPosts, postId, setPostId, selectedPost, headers}) => {
    const [message, setMessage] = useState("");
    console.log("these are the headers ", headers)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/${selectedPost._id}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              message: {
                content: message
              }
            })
        }).then(response => response.json())
        .then(result => {
          return result;
        })
        console.log(response.data);
        return response.data;


    }
    
    return <>
        <h3>Send Message</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </>

    }

    export {SendMessage};


    
