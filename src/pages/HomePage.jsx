import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import "../App.css";

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#ff8c33"];

const HomePage = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="container">
      <h1>All Blogs</h1>
      <Link to="/create"><button>Create New Blog</button></Link>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="blog-card"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <h2>{blog.title}</h2>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
