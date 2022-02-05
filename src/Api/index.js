export async function fetchObject(headers){
    const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/me', {
        headers,
      }).then(response => response.json())
        .then(result => {
          return result;
        })
        .catch(console.error);
        return response.data;
}


export async function fetchPosts(){
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts');
        const result = await response.json();
        return result.data.posts.reverse();
    } catch (error){
        console.error(error);
    }
}


export function findPost(postId, posts){
    console.log("this is the ", postId)
    const myPost = posts.find(post => post._id === postId);
    //return posts.find(post => post._id === postId);
    console.log("This is ", myPost);
    return myPost ? myPost : {}
}

/*export async function editPost(postIdToEdit, storedToken){
    console.log('post id to edit', postIdToEdit);
    const response = await fetch('http://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8d1bd48829fb0017d2233b', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`
        },
        body: JSON.stringify({
        post: {
            title: title,
            description,
            price,
            //location: "New York, NY",
            willDeliver: true
        }
    })
    }).then(response => response.json())
        .then(result => {
        console.log(result);
        })
    .catch(console.error);
} */


export async function deletePost(postIdToDelete, storedToken){
    console.log('post id to delete ', postIdToDelete);
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts/${postIdToDelete}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}` 
        }
        }).then(response => response.json())
            .then(result => {
            console.log(result);
        })
        .catch(console.error);
}


export function makeHeader(token){
  let temporaryHeader = {
      'Content-Type': 'application/json'
  }
  if (token){
    temporaryHeader["Authorization"] = "Bearer " + token  
  } 
  return temporaryHeader
} 

/*export async function messagePoster(storedToken){
    const response = await fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8929ddd439160017553e06/messages', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedToken}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}*/

