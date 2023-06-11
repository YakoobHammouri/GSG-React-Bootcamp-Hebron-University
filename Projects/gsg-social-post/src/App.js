import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post";
import { useState } from "react";

function App() {
  const [post, setPost] = useState({
    author: "John Doe",
    date: "June 9, 2023",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    convallis volutpat massa, non aliquet ex vulputate id. Nunc tincidunt
    posuere nisi, eu tincidunt ligula fringilla eget.`,
    profile: "profile-picture.png",
    image: "placeholder.svg",
    like: 854,
    comment: 541,
    comments: ["Comment 1", "Comment 2", "Comment 3"],
  });

  return (
    <div className="App">
      <Post post={post} />
    </div>
  );
}

export default App;
