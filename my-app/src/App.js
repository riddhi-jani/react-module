import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [a,setA] = useState("Hello")
  const [name,setName] = useState("Riddhi")
  const [names,setNames] = useState([])
  
  function clicked() {
   setA('Hi')
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names,{id:names.length,name:name}])
    console.log("names",names);
    setName("")
   }
  return (
    <>
      <Navbar/>
      <button onClick={clicked}> {a}</button>

    <form onSubmit={addNames}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button>submit</button>
    </form>
    <ul>
     {names.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </>
  );
}

export default App;
