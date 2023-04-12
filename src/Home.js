import './index.css';
import Bloglist from "./Bloglist";
import useFetch from './useFetch';

const Home = () => {
   const{ data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')


   
    
    return ( 
        <div className="home">
          { error && <div><h5>{ error }</h5></div>}
          { isPending && <div><h5>wait a minute</h5></div>} 
           {blogs && <Bloglist blogs={blogs}   />}
        </div>
     );
}
 
export default Home;