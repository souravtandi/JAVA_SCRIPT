const getPosts = () => {
    
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    let allPostTitle = '';

    fetchPosts.then((response) => {
        response.json().then((josnData) => {
            //console.log(josnData);
            for (let i = 0; i < josnData.length; i++) {
                let post = josnData[i];
                //debugger;
                //console.log(post.title);
                allPostTitle = allPostTitle+` <strong>Post title:</strong> ${post.title} <br> <strong>Post body:</strong> ${post.body} <br> <hr>`;
            }
            document.querySelector("#allPosts").innerHTML = allPostTitle;
        });
    });
}