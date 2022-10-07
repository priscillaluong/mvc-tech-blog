document
.querySelector('.update-comment-btn')
.addEventListener('click', updateCommentHandler);

async function updateCommentHandler(event) {
    event.preventDefault();
    console.log("update button clicked");

    const content = document.querySelector('.new-comment-content').value.trim();
    console.log(content);

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const postId = event.target.getAttribute('post-id');
         const response = await fetch(`/api/posts/comment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: {
            'Content-Type': 'application/json',
            },
      });
    
        if (response.ok) {
            console.log("update comment button all ok");
            document.location.replace(`/api/posts/${postId}`);
        } else {
            alert('Failed to update comment');
        }
    }
}