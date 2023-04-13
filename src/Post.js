import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {title, image, body, description, author};

    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added')
    })
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Body:
        <textarea value={body} onChange={(event) => setBody(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
