import { useState } from "react";
import { User, UserModel } from "./user";

export function Form(userData: User, addUser: Function) {
  const [formData, setFormData] = useState({
    name: "Jose",
    lastName: "rive",
    birthday: new Date(1995, 11, 17),
    gender: "female",
    mail: "josearmad@pokemon.es",
    newsletter: true,
  });

  //   function handleSubmit(ev: Event) {
  //     ev.preventDefault();
  //     console.log("Guardando", formData);
  //     addUser(
  //       new UserModel(
  //         formData.name,
  //         formData.lastName,
  //         formData.birthday,
  //         formData.gender,
  //         formData.mail,
  //         formData.newsletter
  //       )
  //     );
  //   }

  //   function handleChange(ev: Event) {
  //     const value =
  //       ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
  //     setFormData({ ...formData, [ev.target.name]: value });
  //   }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="formulario__input">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.name}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          value={formData.lastName}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input">
        <input
          type="date"
          name="birthday"
          id="birthday"
          onChange={handleChange}
          value={formData.birthday}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
          alt=""
          className="pokemon"
          height="50px"
        />
      </div>
      <div className="formulario__input radio">
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          onChange={handleChange}
          value=""
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          onChange={handleChange}
          value="female"
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          onChange={handleChange}
          value="other"
        />
        <label htmlFor="pntm">Prefer not to mention</label>
        <input
          type="radio"
          name="gender"
          id="pntm"
          onChange={handleChange}
          value="prefer not to mention"
        />
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
          onChange={handleChange}
          value={formData.mail}
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
          onChange={handleChange}
          checked={formData.newsletter}
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
