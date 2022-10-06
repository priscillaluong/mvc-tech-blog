const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();
  
    if (title && content) {
        console.log(title + content);
         const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
            'Content-Type': 'application/json',
            },
      });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
  };

  const editPostHandler = async (event) => {
    console.log("Edit post handler received!");
    console.log(event);
  
    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();
  
    if (title && content) {
        console.log(title + content);
         const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
            'Content-Type': 'application/json',
            },
      });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.create-new-post')
    .addEventListener('submit', newPostHandler);
  
    document
    .querySelector('.edit-user-post')
    .addEventListener('click', editPostHandler);
  