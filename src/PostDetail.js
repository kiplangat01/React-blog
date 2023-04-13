import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const PostDetails = () => {
    const { id } = useParams()
    const { data: post, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const redirect = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            redirect.push('/')
        }
        )
    }

    return ( 
        <div className="post-detail">
            { isPending && <div><h4>loadin...</h4></div>}
            { error && <div><h4>{ error }</h4></div>}
            { post && (
                <article>
                    <h3>{ post.title }</h3>
                    <p>writen by { post.author}</p>
                    <img src= { post.image } alt="" />
                    <h6>{ post.description }</h6>
                    <p>{ post.body }</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default PostDetails
