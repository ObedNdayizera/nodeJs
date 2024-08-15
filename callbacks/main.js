const addPost = (e) => {
    e.preventDefault();


    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            title,
            body
        })
    })
    .then(res => res.json())
    .then(data => console.log(data));

}

document.getElementById('addPost').addEventListener('submit', addPost);