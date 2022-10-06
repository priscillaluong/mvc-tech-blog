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
  
/*

  const updatePostHandler = async (event) => {
    event.preventDefault();
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
  }; */
  
  document
    .querySelector('.create-new-post')
    .addEventListener('submit', newPostHandler);

    document
    .querySelector('.update-btn')
    .addEventListener('submit', updatePostHandler);