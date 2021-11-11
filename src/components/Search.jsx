import React, {useState} from "react";

//const [posts, setPosts] = useState([]);
//const [searchTerm, setSearchTerm] = useState('');


export default ({setFilteredResults, posts}) => {
    const [searchTerm, setSearchTerm] = useState("");

    function filterPosts(posts, searchTerm){
        searchTerm = searchTerm.toLowerCase();
        return posts.filter((post, index) => {
            const myPostTitle = post.title.toLowerCase();
            return myPostTitle.includes(searchTerm);

        })
    }

    return (
        <div>
            <h4>Search</h4>
            <input value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value); const myFilteredPosts = filterPosts(posts, event.target.value); setFilteredResults(myFilteredPosts)}} placeholder="search" />
        </div>
    );
};






/*function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
}

const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts */