

export async function fetchPosts(){
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts');
        const result = await response.json();
        return result.data.posts;
    } catch (error){
        console.error(error);
    }

}

export async function deletePosts(){
    fetch(`https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/${postId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TOKEN_STRING_HERE'
        }
        }).then(response => response.json())
            .then(result => {
            console.log(result);
        })
        .catch(console.error);
}