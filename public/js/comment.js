async function newCommentHandler(event) {
    event.preventDefault();
  
    const content = document.querySelector('#new-comment-content').value.trim();

    if (content) {
        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/posts/${id}`, {
                method: 'POST',
                body: JSON.stringify({ content }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
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
    console.log("delete button clicked");
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

document
  .querySelector('.new-comment-btn')
  .addEventListener('click', newCommentHandler);

const delButtons = document.querySelectorAll('.delete-comment-btn');
delButtons.forEach(btn => {
    btn.addEventListener('click', delCommentHandler);
});