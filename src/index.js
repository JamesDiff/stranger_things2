import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './components/login';
import Posts from './components/posts';
import SinglePost from './components/singlePost';


import { UpdatePost } from './components/updatePost';  

import { fetchPosts, fetchObject, makeHeader } from './Api';

import { SendMessage } from './components/sendMessage';

import { RenderUserObject } from './components/userObject';



const App = () => {
    const [token, setToken] = useState(null);
    const [header, setHeader] = useState(null);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({})
    const [postId, setPostId] = useState(null);
    const [user, setUser] = useState(null);  


    useEffect( async () => {
        const results = await fetchPosts();
        console.log(results);
        setPosts(results);
    }, [] );

    const [filteredResults, setFilteredResults] = useState([]);
    //********* */
   
    useEffect(() => {
        setFilteredResults(posts);
    }, [posts]) 


    useEffect( async () => {
        const storedToken = localStorage.getItem("token");
        console.log(storedToken);
        if(storedToken) {
            setToken(storedToken);
            const temporaryHeader = makeHeader(storedToken);
            setHeader(temporaryHeader);
            const currentUser = await fetchObject(temporaryHeader);
            setUser(currentUser);
            console.log(currentUser);
        }

    }, [])



    return ( 
        <Router>
            {!token ?
                <Link to="/login"> Login </Link>
                : null }
            {!token ? <Link to="/register">Register</Link>
                : null }
            {token ? 
                <Link to="/login" onClick = {() => {
                    localStorage.removeItem("token");
                    setToken(null);
                    setHeader(null);
                    setUser(null);
                    
                }}>Logout</Link>
                : null }
                        
            <Route path="/login" render={(routeProps) => <Login {...routeProps} setHeader={setHeader} setToken={setToken} setUser={setUser} />}/>
            <Route path="/register" render={(routeProps) => <Login {...routeProps} setHeader={setHeader} setToken={setToken} setUser={setUser} />} />
            <Route path="/posts" exact render={(routerProps) => <Posts {...routerProps} setSelectedPost={setSelectedPost} setPosts={setPosts} posts={posts} filteredResults={filteredResults} setFilteredResults={setFilteredResults} isLoggedIn={!!token} storedToken={token} headers={header}/>} /> 
            <Route path="/posts/:postId" render={(routerProps) => <SinglePost {...routerProps} selectedPost={selectedPost} setSelectedPost={setSelectedPost} posts={posts}/>}/>
            <Route path="/posts/update/:postId" render={(routerProps) => <UpdatePost {...routerProps} selectedPost={selectedPost} storedToken={token} headers={header}/>}/>
            <Route path="/posts/sendmessage/:postId" render={(routerProps) => <SendMessage {...routerProps} selectedPost={selectedPost} storedToken={token} headers={header}/>}/>
            <Route path="/userobject" render={(routerProps) => <RenderUserObject {...routerProps} user={user} isLoggedIn={!!token} storedToken={token} headers={header}/>  } />
        </Router>
    )

}
    

ReactDOM.render(
  <App />,
  document.getElementById('app')
);