const Bloglist = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete
    return ( 
        <div className="blog-list">
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h6>{ blog.description}</h6>
                    <p>writen by: { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
     );

}
 
export default Bloglist;