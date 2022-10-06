const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#inputName-signup').value.trim();
    const email = document.querySelector('#inputEmail-signup').value.trim();
    const password = document.querySelector('#inputPassword-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);