import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "title1", body: "react is owesome to study", author: "mesh", id: 1},
        { title: "title2", body: "this is my first time learning react", author: "peter", id: 2},
        { title: "title1", body: "i am enjoying the progress", author: "john", id: 3}
    ])
    return ( 
        <div className="home">
           <Bloglist />
        </div>
     );
}
 
export default Home;