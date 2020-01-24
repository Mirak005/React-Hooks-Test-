import React, { useState } from "react";
import ClickCounter from './components/ClickCounter'
import TextChange from './components/TextChange'
import AddContact from "./components/AddContact"
import ContactList from './components/ContactList'
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
    users: [ {name:"Karim" , email:"karim@gmail.com" } , {name:"malek" , email:"malek@gmail.com" }]
  });

  const handelCount = () => setState({ ...state, count: state.count + 1 });
  const handelReset = () => setState({ ...state, count: 0 });
  const handelText = e => setState({ ...state, text: e.target.value });
  const handelChange = (e, key) =>
    setState({ ...state, user: { ...state.user, [key]: e.target.value } });
  const handelAdd = () => setState({
      ...state,
      //Add Contact
      users: [...state.users, state.user],
      //Reset Form
      user: { ...state.user, name: "", email: "" }
    });

  return (
    <div className="App">
      <h1>React Hooks && @Material-ui</h1>
      <div className="container">
      <ClickCounter state={state} handelCount={handelCount} handelReset={handelReset} />
       <TextChange state={state} handelText={handelText} /> 
       <AddContact state ={state} handelChange={handelChange} handelAdd={handelAdd} />
      </div>
      <ContactList state={state} /> 

    </div>
  );
}

export default App;
