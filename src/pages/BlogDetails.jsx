import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found!</h2>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
