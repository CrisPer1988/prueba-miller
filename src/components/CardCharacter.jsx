import { useEffect, useState } from "react";
import "./styles/cardCharacter.css";
import BarProgress from "./BarProgress";

const CardCharacter = ({ allCharacters, setAllCharacters }) => {

  const [characters, setCharacters] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);



  async function getCharacters() {
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358";

    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  function selectChar(char) {
    console.log(char);
    setProgress(char.series.available);
  }

  function openModal(char) {
    setCurrentCharacter(char);
    setShowModal(true);
  }

  function closeModal() {
    setCurrentCharacter(null);
    setShowModal(false);
  }

  console.log(openModal);

  return (
    <>
      <BarProgress 
      progress={progress}
      />

      <div className="container__cards">
        {characters.map((character) => (
          <div key={character.id}>
            <div className="content__card">
              <div className="container__name">
              <h2 className="name">
                 {character.name} 
                <img className="vector-name" src="/images/vector-name.png" alt="" />
                <img className="vector-name-rigth" src="/images/vector-rigth.png" alt="" />
              </h2>
              </div>
              <div className="content__img">
              <img className="img__character"
                onClick={() => selectChar(character)}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
              <div className="content__diamante">
              <img className="diamante" src="/images/diamante-svg.svg" alt="" />
              <img className="diamante-rigth" src="/images/diamante-svg.svg" alt="" />
              </div>
              </div>
              
             
              <h3 className="total__comics">Comics: <span className="number__detail"> {character.comics.available}</span> </h3>
              <h3 className="total__comics">Peliculas: <span className="number__detail"> {character.series.available}</span> </h3>
              <button className="btn_card" onClick={() => openModal(character)}>Detalle</button>
            </div>
            
          </div>
        ))}
      </div>

      {showModal && currentCharacter && (
          <div className="content_modal">
            <div className="modal">
              <h3>{currentCharacter.name}</h3>
              <h4>{currentCharacter.id}</h4>
              <button onClick={closeModal}>Salir</button>
            </div>
            
          </div>
        
      )}
    </>
  );
};

export default CardCharacter;
