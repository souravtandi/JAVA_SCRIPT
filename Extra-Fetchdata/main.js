const getposts = () => {
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
    let allpostsTitle = '';

    fetchPosts.then((response)=>{
        response.json().then((jsonData)=>{
            // console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                let post = jsonData[i];
                //debugger;
                //console.log(post.title);
                allpostsTitle = allpostsTitle + ` <strong>Post title:</strong> ${post.title} <br> <strong>Post body:</strong> ${post.body} <br> <hr> `;
            }
            document.querySelector("#allposts").innerHTML = allpostsTitle;
        });
    });
}