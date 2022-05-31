import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Formulario</h1>{" "}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          className="pokemon"
        />
      </header>

      <Form
        name={""}
        lastName={""}
        birthday={new Date()}
        gender={""}
        mail={""}
        newsletter={false}
      />
    </div>
  );
}

export default App;
