import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bloglist = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete
    return ( 
        <div className="blog-list">
             {blogs.map((blog) => (
                <div className="blog-preview card"  key={blog.id}>
                    <div class="card-body">
                    <h2 class="card-title">{ blog.title }</h2>
                    <h6 class="card-text">{ blog.description}</h6>
                    <p>writen by: { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                    </div>
                </div>
            ))}
        </div>
     );

}
 
export default Bloglist;