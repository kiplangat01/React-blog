import { useState } from "react";

const Post = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDecription] = useState('')
    const [body, setBody] = useState('')
    return ( 
       <div className="create">
        <h2>Post a new blog</h2>
        <form action="">
            <label htmlFor="title">title</label>
            <input type="text" required value={ title } onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="">Description</label>
            <textarea name="" required onChange={(e) => setDecription(e.target.value)}></textarea>
            <label htmlFor="">Post details</label>
            <textarea name="" required onChange={(e) => setBody(e.target.value)}></textarea>
            <label htmlFor="" >Author</label>
            <input type="text" value={ author } onChange={(e) => setAuthor(e.target.value)} />
            <button>Post</button>
            
        </form>
       </div>
     );
}
 
export default Post;
