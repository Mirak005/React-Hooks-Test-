import React, { useState } from "react";
import Contact from "./components/contactCard";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  // At first i tried to use each state in a const

  // const [count , setCount] = useState(0)
  // const [text , setText] = useState("Hey")
  // const [users , setUsers] =useState([])
  // const [user , setUser] = useState({
  //   name:"",
  //   email:""
  //   })

  //then i tried to complicate things and it works

  const [state, setState] = useState({
    count: 0,
    text: "",
    user: { name: "", email: "" },
    users: []
  });

  const handelCount = () => setState({ ...state, count: state.count + 1 });
  const handelReset = () => setState({ ...state, count: 0 });
  const handelText = e => setState({ ...state, text: e.target.value });
  const saveUser = (e, key) =>
    setState({ ...state, user: { ...state.user, [key]: e.target.value } });
  const handelAdd = () =>
    setState({
      ...state,
      users: [...state.users, state.user],
      user: { ...state.user, name: "", email: "" }
    });

  return (
    <div className="App">
      <h1>React Hooks && @Material-ui</h1>
      <div className="container">
        <div className="click-count">
          <p className="number-click"> You Clicked {state.count.toString().length<2 ? `0${state.count}`:state.count } Times</p>
          <button className="click-me-btn" onClick={handelCount}>
            Click me
          </button>
          <button
            style={{ display: "block", margin: "0.5rem" }}
            className="click-me-btn"
            onClick={handelReset}
          >
            Reset Count
          </button>
        </div>
        <div className="text-container">
          <p className="text-change">{state.text ? state.text : "Change Me"}</p>
          <label>Live Text Change </label>
          <input
            type="text"
            maxLength="19"
            value={state.text}
            onChange={handelText}
          />
        </div>
        <div className="users-container">
          <h2>Add User with React hooks</h2>
          <label>User Name</label>
          <input
            type="text"
            name="name"
            value={state.user.name}
            onChange={event => saveUser(event, event.target.name)}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.user.email}
            onChange={e => saveUser(e, e.target.name)}
          />

          <Button
            className="add-btn"
            onClick={handelAdd}
            variant="contained"
            color="primary"
          >
            Add Contact
          </Button>
        </div>
      </div>
<div className="contact-list-container">

      {state.users.map((user, index) => (
        <Contact key={index} user={user} />
      ))}
</div>
    </div>
  );
}

export default App;
