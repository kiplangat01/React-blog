const Bloglist = () => {
    return ( 
        <div className="blog-list">
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
 
export default Bloglist;