const newPostHandler = () =>{
    // moving to a different location 
    location.replace('/dashboard/new')
}


const deletePostFunction = async (event) => {
    event.preventDefault();

        const id = event.target.id;
        const deletePost = await fetch(`/api/post/${id}`, {
            method: 'DELETE'
        })

        if(deletePost.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to Delete Post')
        }
    
}

document.getElementById('newpost').addEventListener('click', newPostHandler);


console.log(document.querySelector('.delete-button'));
document.querySelectorAll('.delete-button').forEach(item => {
    item.addEventListener('click', (event) => deletePostFunction(event));
})