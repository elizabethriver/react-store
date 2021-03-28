import { useState, useEffect } from "react";

const usePersonage = (url) => {
  const [character, setCharacter] = useState([]);
  //Conectar con API
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setCharacter(data.results);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return character;
};

export default usePersonage;
