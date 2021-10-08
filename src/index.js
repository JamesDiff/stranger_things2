import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-dom';

import Posts from './components/posts';


const App = () => {
 return (
    
        <BrowserRouter>
            
            <Route path="/test" render={ () => {
                return <h1>test</h1>
            } } />
            <Route path="/posts" render={ () => {
                return <h2>test 2</h2>

            } } />

            <div>
                Hello World
            </div>

        </BrowserRouter>
)}
  

ReactDOM.render(
  <App />,
  document.getElementById('app')
);