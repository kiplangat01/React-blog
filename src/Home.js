import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "title1", body: "react is owesome to study", author: "mesh", id: 1},
        { title: "title2", body: "this is my first time learning react", author: "peter", id: 2},
        { title: "title3", body: "i am enjoying the progress", author: "john", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log('d')
    })
    return ( 
        <div className="home">
           <Bloglist blogs={blogs} handleDelete={  handleDelete }/>
        </div>
     );
}
 
export default Home;