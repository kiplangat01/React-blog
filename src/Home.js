import { useState, useEffect } from "react";
import './index.css';
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
    useEffect(() => {
       fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
          })
    })
    return ( 
        <div className="home">
          { isPending && <div><h5>loading...</h5></div>}
            <section><h1>Motivation </h1></section>
           {blogs && <Bloglist blogs={blogs} handleDelet e={  handleDelete } />}
        </div>
     );
}
 
export default Home;