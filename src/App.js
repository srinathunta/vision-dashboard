import "./App.css";
import {
  Sidebar,
  Header,
  Dashboard,
  Tables,
  Profile,
  Billing,
  Rtl,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("Dashboard");

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const changeTitle = (title) => {
    setTitle(title);
  };

  return (
    <div className="App flex bg-gradient-to-br from-primary to-secondary text-white">
      <div className="sidebar w-2/12 container">
        <Sidebar title={title} change={changeTitle} />
      </div>
      <div className="main w-10/12 p-2">
        <Header title={title} />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/tables" element={<Tables />} />
          <Route exact path="/profile" element={<Profile user={user[0]} />} />
          <Route exact path="/billing" element={<Billing user={user[0]} />} />
          <Route exact path="/rtl" element={<Rtl />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
