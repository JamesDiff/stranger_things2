export async function fetchPosts(){
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts');
        const result = await response.json();
        return result.data.posts;
    } catch (error){
        console.error(error);
    }

}


export async function registerUser(username, password){
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/users/register',
        {
            //fetch takes in url, object-of options, like method
          //api stuff goes in here; method, headers, body, user(username, password)

        } )
        
        
        const result = await response.json();        
        return result.data.token;
    } catch {

    }
}