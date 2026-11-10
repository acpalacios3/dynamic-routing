import {post} from "../lib/post";
import {Link} from "react-router-dom"


function Blog() {
  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      {post.map((postItem) => (
        <article key={postItem.id}
             className="blog-item"
        >

          {/* <h2>{postItem.title}</h2> */}

          <h2>
            {/* create a navigation link and get the current blog slug */}
            <Link to = {`/blog/${postItem.slug}`}>
            {postItem.title}
            </Link>

          </h2>
          
          <p>{postItem.slug}</p>
        
        </article>
      ))}
    </div>
  );
}

export default Blog;



