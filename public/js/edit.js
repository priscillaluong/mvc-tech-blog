document.querySelector('#delete-btn').addEventListener('click', delPostHandler);
document.querySelector('#update-btn').addEventListener('click', updatePostHandler);


async function delPostHandler(event) {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
}

async function updatePostHandler(event) {
    event.preventDefault();
    console.log("update button clicked");

    const title = document.querySelector('.new-post-title').value.trim();
    const content = document.querySelector('.new-post-content').value.trim();
    console.log(title + content);

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
         const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
            'Content-Type': 'application/json',
            },
      });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
}