document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.querySelector('#new-post-form');
  
    const newFormHandler = async (event) => {
      event.preventDefault();
  
      const title = document.querySelector('input[name="post-title"]').value;
      const content = document.querySelector('textarea[name="content"]').value;
  
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post. Please try again.');
        }
      } catch (error) {
        console.error('Error creating post:', error);
        alert('Failed to create post. Please try again.');
      }
    };
  
    newPostForm.addEventListener('submit', newFormHandler);
  });