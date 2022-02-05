import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import "./index.css";
import "./bootstrap.min.css";

import Login from './components/login';
import Posts from './components/posts';
import SinglePost from './components/singlePost';


import { UpdatePost } from './components/updatePost';  

import { fetchPosts, fetchObject, makeHeader } from './Api';

import { SendMessage } from './components/sendMessage';

import { RenderUserObject } from './components/userObject';

import Header from './components/Header';


const App = () => {
    const [token, setToken] = useState(null);
    const [header, setHeader] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [user, setUser] = useState(null);  
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const [updateMade, setUpdateMade] = useState(0);


    useEffect( async () => {
        const results = await fetchPosts();
   
        setPosts(results);
        setFilteredResults(results);
    }, [updateSuccess, updateMade] );

    

    // useEffect(() => {
    //     setFilteredResults(posts);
    // }, [posts]) 


    useEffect( async () => {
        const storedToken = localStorage.getItem("token");
        if(storedToken) {
            setToken(storedToken);
            const temporaryHeader = makeHeader(storedToken);
            setHeader(temporaryHeader);
            const currentUser = await fetchObject(temporaryHeader);
            setUser(currentUser);
        }

    }, [updateMade])



    return ( 
        <Router>
            {/* {!token ?
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
                : null } */}
            
            <Header token={token} setToken={setToken} setUser={setUser}/>
            <div className='Routes'>
                <Route path="/login" render={(routeProps) => <Login {...routeProps} setHeader={setHeader} setToken={setToken} setUser={setUser} />}/>
                <Route path="/register" render={(routeProps) => <Login {...routeProps} setHeader={setHeader} setToken={setToken} setUser={setUser} />} />
                <Route path="/" exact render={(routerProps) => <Posts {...routerProps} updateMade={updateMade} setUpdateMade={setUpdateMade} setPosts={setPosts} posts={posts} user={user} filteredResults={filteredResults} setFilteredResults={setFilteredResults} isLoggedIn={!!token} storedToken={token} headers={header}/>} /> 
                <Route path="/posts/:postId" render={(routerProps) => <SinglePost {...routerProps} updateMade={updateMade} setUpdateMade={setUpdateMade} posts={posts} setPosts={setPosts} headers={header} user={user} updateSuccess={updateSuccess} setUpdateSuccess={setUpdateSuccess}/>} />
                <Route path="/posts/sendmessage/:postId" render={(routerProps) => <SendMessage {...routerProps} storedToken={token} headers={header}/>}/>
                <Route path="/userobject" render={(routerProps) => <RenderUserObject {...routerProps} user={user} posts={posts} setPosts={setPosts} setUser={setUser} setPosts={setPosts} isLoggedIn={!!token} storedToken={token} headers={header}/>  } />

            </div>
   
        </Router>
    )

}
    

ReactDOM.render(
  <App />,
  document.getElementById('app')
);