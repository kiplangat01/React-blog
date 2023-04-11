import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "title1", body: "react is owesome to study", author: "mesh", id: 1},
        { title: "title2", body: "this is my first time learning react", author: "peter", id: 2},
        { title: "title1", body: "i am enjoying the progress", author: "john", id: 3}
    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h5>{blog.body}</h5>
                    <p>writen by: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;