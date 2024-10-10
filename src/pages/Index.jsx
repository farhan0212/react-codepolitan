import { useState } from "react";
import Search from "../components/Search";
import postsData from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search searchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article key={index} {...{ title, tags, date, isNew }} />
      ))}
      <hr />
    </>
  );
}

export default Homepage;
