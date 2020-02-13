import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState([]);

  const handleFormPost = e => {
    e.preventDefault();
    axios({
      url: "/users",
      method: "POST",
      data: {
        name: input
      }
    })
      .then(res => {
        //TODO update list
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    axios({
      url: "/users",
      method: "GET"
    })
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const changeHandler = e => {
    setInput(e.target.value);
  };
  return (
    <div className="App" style={{ color: "#fff" }}>
      <h1>App</h1>
      <h2>Users:</h2>
      {users &&
        users.map(user => {
          return <p key={user.id}>{user.username}</p>;
        })}
      {!users.length && <p>There are no users.</p>}

      <h2>New User:</h2>
      <form>
        <input value={input} onChange={changeHandler} name="name" type="text" />
        <input onClick={handleFormPost} type="submit" />
      </form>
    </div>
  );
}

export default App;
