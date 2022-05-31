import { useState } from "react";
import { User } from "./user";

export function Form(userData: User) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthday: 0,
    gender: "",
    mail: "",
    newsletter: false,
  });

  return (
    <form className="formulario">
      <div className="formulario__input">
        <input type="text" name="name" id="" placeholder="Nombre" />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <input type="text" name="lastName" id="" placeholder="Apellido" />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <input type="date" name="date" id="" />{" "}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input radio">
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="other">Other</label>
        <input type="radio" name="gender" id="other" />
        <label htmlFor="pntm">Prefer not to mention</label>
        <input type="radio" name="gender" id="pntm" />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="pokemon@gmail.com"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <label htmlFor="newsLetter">
          Desea recibir información de nuestra newsletter?
        </label>
        <input
          type="checkbox"
          name="newsLetter"
          id="newsLetter"
          checked={true}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <button type="submit">Guardar</button>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
    </form>
  );
}
