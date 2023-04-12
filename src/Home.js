import { useState, useEffect } from "react";
import './index.css';
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
    useEffect(() => {
       fetch('http://localhost:8000/blogs')
          .then(res => {
            if (!res.ok){
              throw Error('resource not found')
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null)
          })
          .catch(err => {
            setIsPending(false)
            setError(err.message);
          })
    })
    return ( 
        <div className="home">
          { error && <div><h5>{ error }</h5></div>}
          { isPending && <div><h5>wait a minute</h5></div>} 
           {blogs && <Bloglist blogs={blogs} handleDelet e={  handleDelete } />}
        </div>
     );
}
 
export default Home;