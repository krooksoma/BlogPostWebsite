const createNewPost = async (event) =>{
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({title, body}),
        // tellint json format data is being sent
        headers: { 'Content-Type': 'application/json'}
    });
    // sending user to another location after creating
    if(response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }

}


document.getElementById('newpostform').addEventListener('submit', createNewPost);