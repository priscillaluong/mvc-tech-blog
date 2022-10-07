async function newCommentHandler(event) {
    event.preventDefault();
  
    const content = document.querySelector('#new-comment-content').value.trim();

    if (content) {
        console.log(content);
        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/posts/${id}`, {
                method: 'POST',
                body: JSON.stringify({ content }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
            console.log(response);
        if (response.ok) {
            console.log("All ok!")
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
  };
};

async function delCommentHandler(event) {
    console.log("Delete button clicked");
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/comment/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to delete comment');
        }
    }
}

async function updateCommentHandler(event) {
    event.preventDefault();
    console.log("update button clicked");

    const content = document.querySelector('.new-comment-content').value.trim();
    console.log(content);

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
         const response = await fetch(`/api/posts/comment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: {
            'Content-Type': 'application/json',
            },
      });
    
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to update comment');
        }
    }
}

  document
    .querySelector('.new-comment-btn')
    .addEventListener('click', newCommentHandler);

    document
    .querySelector('#update-comment-btn')
    .addEventListener('click', updateCommentHandler);

    document
    .querySelector('#delete-comment-btn')
    .addEventListener('click', delCommentHandler);