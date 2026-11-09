import { post } from "../lib/post";
import { useParams } from "react-router-dom"

export default function BlogPost() {

    // access the slug to get specific data for that post
    const { slug } = useParams();

    // console.log(slug);
    //  find() goes through the array and returns the first blog that matches the slug.
    const itemSelect = post.find(
        (item) => item.slug === slug
    );
    
    // if it doesn't find the blog, it shows a message
    if (!itemSelect) {
        return <h2> Post not found </h2>
    }

    return (
        <div>
            <h1>{itemSelect.title}</h1>
            <div>{itemSelect.content}</div>
        </div>
    )
}