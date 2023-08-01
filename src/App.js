import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "HTML", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
    { id: 4, title: "React", body: "Description" },
    { id: 5, title: "Python", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 6, title: "JavaScript", body: "Description" },
    { id: 7, title: "HTML", body: "Description" },
    { id: 8, title: "CSS", body: "Description" },
    { id: 9, title: "React", body: "Description" },
    { id: 10, title: "Python", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Posts lists 1"} />
      <PostList posts={posts2} title={"Posts lists 2"} />
    </div>
  );
}

export default App;
