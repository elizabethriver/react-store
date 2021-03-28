import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "../Search";
import usePersonage from "../../hooks/useCharacters";

//TODO favoritos
const initialState = {
  favorites: [],
};

//TODO API
const API = "https://rickandmortyapi.com/api/character";
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
const Character = () => {
  // const [character, setCharacter] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const character = usePersonage(API);

  //TODO buscar nombre
  // const handlerSearch = () => {
  //   // console.log('input')
  //   // console.log(e.target.value);
  //   // setSearch(e.target.value);
  //   setSearch(searchInput.current.value);
  //   // console.log(searchInput);
  // };
  //use callback
  const handlerSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  //TODO a;adir favoritos
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //TODO filtrar
  // const filterUsers = caracter.filter((user) => {
  //     return user.name.toLowerCase().includes(search.toLowerCase())
  //   })
  // console.log(filterUsers)
  const filterUsers = useMemo(
    () =>
      character.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, character]
  );
  //Conectar con API
  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.results);
  //       setCaracter(data.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handlerSearch={handlerSearch}
      />
      {filterUsers.map((personage) => (
        <div className="item" key={personage.id}>
          <p>{personage.name}</p>
          <button type="button" onClick={() => handleClick(personage)}>
            {" "}
            Click me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Character;
