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

  document
    .querySelector('.new-comment-btn')
    .addEventListener('click', newCommentHandler);