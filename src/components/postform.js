import React, { useState } from "react";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "10px",
          width: "100%",
          height: "100px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "#0078d4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
