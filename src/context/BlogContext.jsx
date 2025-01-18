import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", description: "This is my first blog post!" },
    { id: 2, title: "Second Blog", description: "This is my second blog post!" },
  ]);

  const addBlog = (title, description) => {
    const newBlog = {
      id: blogs.length + 1,
      title,
      description,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
