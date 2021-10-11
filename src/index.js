import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './components/login';

import Posts from './components/posts';

const App = () => {
    const [token, setToken] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if(storedToken) {
            setToken(storedToken);
        }

    }, [])

    return ( 
        <Router>
            <Link to="/login"> Login </Link>
            <Link to="/register">Register</Link>
            <Route path="/login" render={(routeProps) => <Login {...routeProps} />}/>
            <Route path="/register" render={(routeProps) => <Login {...routeProps} />} />
            <Route path="/posts" render={() => <Posts isLoggedIn={!!token}/>} />
        </Router>
    )

}
    

ReactDOM.render(
  <App />,
  document.getElementById('app')
);