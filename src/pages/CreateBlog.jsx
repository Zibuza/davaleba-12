import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CreateBlog = () => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, description);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
