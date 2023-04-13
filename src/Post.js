import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function PostForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, seIspending ]= useState(false);
  const redirect = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {title, image, body, description, author};
    seIspending(true);
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added')
        seIspending(false)
        redirect.push('/')
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
      { !isPending && <button type="submit">Post</button> }
      { isPending && <button type="submit">posting...</button> }
    </form>
  );
}

export default PostForm;
