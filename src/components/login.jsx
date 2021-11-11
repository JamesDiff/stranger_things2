import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import { makeHeader } from "../Api";



async function login(userName, passWord){
    const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        user: {
            username: userName,
            password: passWord
        }
        })
    })

    const result = await response.json();
    console.log(result.data.token);
    const token = result.data.token;
    localStorage.setItem("token", token)
    return token;

 
}

function register(setToken, username, password, confirmedPassword){
    if (password !== confirmedPassword){
        alert("Passwords don't match");
        return;
    }
    fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/register', 
        {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username,
            password: password
        }
    })
    })
    
    .then(response => response.json())
    .then(result => {
    console.log(result);
    })
    .catch(console.error);
}


const Login = ({ setToken, match, setHeader}) => {
    const [userName, setUserName] = useState("username");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const history = useHistory();
    

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                let newToken = null;
                if(match.url === "/register") newToken = register(userName, password, confirmedPassword);
                if(match.url === "/login") newToken = await login(userName, password); 
                setHeader(makeHeader(newToken));
                setToken(newToken);
                history.push("/posts") //changed this from "/posts"

                console.log(userName, password, confirmedPassword)
            }}
        >
            <br />
            <div className="mp-2">
                <label className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={({target: {value}})=> setUserName(value)} 
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="your username"
                />    
                
            </div>
            <br />
            <div className="mp-2">
                <label className="form-lable">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                />
            </div>
            <br />
            {match.url === "/register" ?
            (<div className="mp-2">
                <label className="form-label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    onChange={({target: {value}}) => setConfirmedPassword(value)}
                    value={confirmedPassword}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                />
            </div>) : null} 
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                    Submit
                </button>
                { 
                    match.url === "/register" ? 
                    <Link to="/login"> Already have an account? </Link>
                    : <Link to="/register"> Don't have an account? </Link>
                }
            </div>


        </form>
    )

}

export default Login;