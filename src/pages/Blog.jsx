import {post} from "../lib/post";
import {Link} from "react-router-dom"


function Blog() {
  return (
    <>
      <p>My Blog</p>
      {post.map((postItem) => (
        <div key={postItem.id}>

          {/* <h2>{postItem.title}</h2> */}

          <h2>
            {/* create a navigation link and get the current blog slug */}
            <Link to = {`/blog/${postItem.slug}`}>
            {postItem.title}
            </Link>

          </h2>
          
          <p>{postItem.slug}</p>
        
        </div>
      ))}
    </>
  );
}

export default Blog;



