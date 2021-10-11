import React, { useState } from 'react';
import { Link } from "react-router-dom";

async function login(userName, passWord, setToken){
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

//passheader into various compoenents and use it in place of headers in fetch calls

    const result = await response.json();
    console.log(result.data.token);
    const token = result.data.token;
    setToken(token);

    localStorage.setItem("token", token)
    setHeader(makeHeader(token));
 
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

function makeHeader(token){
    let temporaryHeader = {
        'Content-Type': 'application/json'
    }
    if (token){
      temporaryHeader["Authorization"] = "Bearer " + token  
    } 
    return temporaryHeader
} 


const Login = ({ setToken, match, setHeader}) => {
    const [userName, setUserName] = useState("username");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(match.url === "/register") register(setToken, userName, password, confirmedPassword)
                if(match.url === "/login") login(userName, passWord, setToken)


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