import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/cardCharacter.css"
import BarProgress from './BarProgress'


const CardCharacter = ({allCharacters, setAllCharacters}) => {

    const [oneCharacter, setOneCharacter] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358"
        axios.get(url)
        .then(res => setAllCharacters(res.data.data.results))
        .catch(err => console.log(err))
      }, [])

      console.log(allCharacters);
    
    const handleClick = (id) => {
        const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358`
        axios.get(url)
        .then(res => setOneCharacter(res.data.data.results))
        .catch(err => console.log(err))
    }

    console.log(oneCharacter);

    const show = () => {
        setShowModal(!showModal)
    }
      
  return (
   <>
    <BarProgress 
        oneCharacter={oneCharacter}
        />
    <div onClick={show} className='container__cards'>
       
        {
        allCharacters?.map(character => (
          <div className='content__card' key={character.id}>
            <h2>{character.name}</h2>
            <img onClick={() => handleClick(character.id)} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" /> 
            <h3>Comics: {character.comics.available}</h3>
            <h3>Peliculas: {character.series.available}</h3>
          </div>

          
        ))
        
      }

      {
       oneCharacter?.map(char =>(
        <div className='content__modal'>
            <div className={`modal ${showModal ? "modal-show" : ""}`}>
            <h2>{char.name}</h2>
            <h3>{char.id}</h3>
            <button onClick={show}>salir</button>
            </div>
            
        </div>
       ))
      }
    

    </div>
    </>
  )
}

export default CardCharacter