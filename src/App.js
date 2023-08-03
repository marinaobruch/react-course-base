import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "HTML", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
    { id: 4, title: "React", body: "Description" },
    { id: 5, title: "Python", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />

        {/* Неуправляемый/ неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post discription"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title={"Posts lists 1"} />
    </div>
  );
}

export default App;
