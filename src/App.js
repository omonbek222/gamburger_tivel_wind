import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./companents/BookList";
import AddBook from "./companents/AddBook";
import EditBook from "./companents/EditBook";

const App = () => {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

/*
1-masala
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

<Avatar src="https://via.placeholder.com/150" alt="User Profile" />

2-masala

function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// Ishlatish:
<Greeting /> // "Hello, Grupp!"
<Greeting name="Shahriyor" /> // "Hello, omonbek!"

3-masala
function Box({ width, height, color }) {
  return <div style={{ width, height, backgroundColor: color }} />;
}


<Box width="200px" height="100px" color="blue" />

4-masala
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}


<Button onClick={() => alert("Clicked!")} />

5-masala
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Title</h2>
  <p>Some description...</p>
</Card>

6-masala

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

<List items={['Apple', 'Banana', 'Cherry']} />

7-masala

function StatusMessage({ isSuccess }) {
  return <div>{isSuccess ? "Success!" : "Error!"}</div>;
}


<StatusMessage isSuccess={true} /> // "Success!"
<StatusMessage isSuccess={false} /> // "Error!"

8-masala
function Modal({ title, children }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

<Modal title="Delete Confirmation">
  <p>Are you sure you want to delete?</p>
  <button>Yes</button>
  <button>No</button>
</Modal>


9-masala
function withLogger(WrappedComponent) {
  return function (props) {
    console.log("Rendered");
    return <WrappedComponent {...props} />;
  };
}

const MyComponent = () => <div>My Component</div>;
const EnhancedComponent = withLogger(MyComponent);

<EnhancedComponent />


10-masala
function IconButton({ icon, type }) {
  return (
    <button type={type}>
      <i className={icon}></i> {type === 'submit' ? 'Submit' : 'Reset'}
    </button>
  );
}


<IconButton icon="fa fa-check" type="submit" />
<IconButton icon="fa fa-refresh" type="reset" />

*/






export default App;





