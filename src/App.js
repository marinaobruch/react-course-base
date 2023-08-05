import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "About JavaScript" },
    { id: 2, title: "HTML", body: "Closer to HTML" },
    { id: 3, title: "CSS", body: "Main CSS" },
  ]);

  const [selectedSort, setSelectedSort] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Cort by"
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Posts lists 1"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found </h1>
      )}
    </div>
  );
}

export default App;
