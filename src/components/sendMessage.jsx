import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


const SendMessage = ({post, posts, setPosts, match, updateMade, setUpdateMade, headers}) => {
    const [message, setMessage] = useState("");
    console.log("these are the headers ", headers)
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/${match.params.postId}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              message: {
                content: message
              }
            })
        }).then(response => response.json())
        .then(result => {
          setUpdateMade(updateMade + 1);
          history.push('/userobject');
          return result;
        })
        // console.log(response.data);
        // return response.data;


    }
    
    return <div className='Route-container'>
        <h3>Send Message</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </div>

    }

    export {SendMessage};


    
