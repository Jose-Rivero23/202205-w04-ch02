import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";
import { UserModel } from "./components/user";
import { USERLIST } from "./components/users";

export function App() {
  //   const [users, setUsers] = useState(users);
  //   const addUser = (users) => {
  //     setUsers([...users, user]);
  //   };

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
        // addUser={addUser}
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
