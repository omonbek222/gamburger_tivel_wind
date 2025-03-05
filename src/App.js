import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Header />
     
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </Router>
  );
}

const Home = () => <div>Home Page</div>;
const Menu = () => <div>Menu Page</div>;

export default App;
















