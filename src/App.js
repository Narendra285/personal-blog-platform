import React, { useState } from "react";
import Navbar from "./components/navbar";
import PostForm from "./components/postform";
import PostList from "./components/postlist";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default App;
