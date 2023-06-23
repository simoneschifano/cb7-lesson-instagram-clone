import { useState } from "react";

import "./App.css";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import TabBar from "./components/TabBar";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  return (
    <>
      <TopBar />
      <Stories user={user} stories={stories} />
      <Posts posts={posts} />
      <TabBar />
    </>
  );
}

export default App;
