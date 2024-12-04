import React from "react";

const PostList = ({ posts }) => (
  <div>
    {posts.length ? (
      posts.map((post, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            background: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#0078d4" }}>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))
    ) : (
      <p style={{ textAlign: "center", color: "#777" }}>No posts available.</p>
    )}
  </div>
);

export default PostList;
