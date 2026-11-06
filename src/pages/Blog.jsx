import {post} from "../lib/post";


function BlogPages() {
  return (
    <>
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.slug}</p>
        </div>
      ))}
    </>
  );
}

export default BlogPages;



