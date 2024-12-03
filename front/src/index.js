import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

const user = [
  {
    id: 1,
    name: "pepo",
    image: "https://robohash.org/user",
  },
  {
    id: 2,
    name: "pingu",
    image: "https://robohash.org/user2",
  },
];

const user2 = ["pepo", "pingu", "feo"];

function Counter() {

  const [counter, setCounter] = useState(0)
  const [mensaje, setMensaje] = useState(0)

  useEffect(() => {
    console.log("render")
  }, [counter])

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={() => {setCounter(counter+1)}}> Sumar </button>
      <button onClick={() => {setCounter(counter-1)}}> Restar </button>
      <input onChange={e => setMensaje(e.target.value)}/> <button onClick = {() => alert("mensaje es: "+mensaje)}> Save </button>
      <h1>{mensaje}</h1>
    </div>
  ); 
}

root.render(
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
      padding: "20px",
    }}
  >
    <Counter/>
    <Greeting title="hola" a={[1, 2, 3]} />
    <Button text="click me" />
    <TaskCard ready={true} />
    <input id="hola" onChange={handleChange} />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
        alert("enviado");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
    <Posts />
    {user2.map((name) => "hola" + name)}
    {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </div>
);
