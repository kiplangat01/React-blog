import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bloglist = (props) => {
    const blogs = props.blogs
   
    return ( 
        <div className="blog-list container">
          <section><h1>Motivation </h1></section>
             {blogs.map((blog) => (
               <div className="row">
                 <div className="col-sm-4">
                    <div className="blog-preview card column"  key={blog.id}>
                    <img className="cardimg"  src= { blog.image } alt="" />
                    <div class="card-body">
                    <h4 class="card-title">{ blog.title }</h4>
                    <hp class="card-text">{ blog.description}</hp>
                    <p>writen by: { blog.author }</p>
                
                    </div>
                </div>
                </div>
               </div>
            ))}
        </div>
     );

}
 
export default Bloglist;