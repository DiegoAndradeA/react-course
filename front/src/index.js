import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting} from './Greeting'
import {Button} from './Button'
import {TaskCard} from './Task'
import {Posts} from "./Posts"

const root = ReactDOM.createRoot(document.getElementById("root"));


const handleChange = (e) => {
  console.log(e.target.value)
}


root.render(
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
  <Greeting title="hola" a={[1, 2, 3]} />
  <Button text="click me" />
  <TaskCard ready={true} />
  <input id="hola" onChange={handleChange} />
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log('enviado');
      alert('enviado');
    }}
  >
    <h1>Registro de usuario</h1>
    <button>Send</button>
  </form>
  <Posts/>
</div>

);
