import React, { useEffect, useState, useReducer, useMemo } from "react";

//TODO favoritos
const initialState = {
  favorites: [],
};
// console.log(initialState)
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

//TODO crear caracteres
const Caracter = () => {
  const [caracter, setCaracter] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  
//TODO buscar nombre
  const handlerSearch = (e) => {
    // console.log('input')
    console.log(e.target.value)
    setSearch(e.target.value);

  };
//TODO a;adir favoritos
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //TODO filtrar

  const filterUsers = caracter.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  console.log(filterUsers)

  //Conectar con API
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setCaracter(data.results);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <div className="Search">
        <input type="text" value={search} onChange={handlerSearch} />
      </div>
      {caracter.map((personaje) => (
        <div className="item" key={personaje.id}>
          <p>{personaje.name}</p>
          <button type="button" onClick={() => handleClick(personaje)}>
            {" "}
            Click me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Caracter;
