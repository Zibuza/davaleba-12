import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import HomePage from "./pages/HomePage";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import "./app.css"

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
