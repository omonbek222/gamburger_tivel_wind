import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Comments from "./Components/Comments";
import Posts from "./Components/Posts";

function App() {
  return (
    <Router>
      <Header />
      {/* <Comments/> */}
      <Posts/>
      <Todos/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Menu />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

const Home = () => <div>Home Page</div>;
const Menu = () => <div>Menu Page</div>;

export default App;
















