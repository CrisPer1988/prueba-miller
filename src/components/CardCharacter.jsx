import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/cardCharacter.css"


const CardCharacter = ({allCharacters, setAllCharacters}) => {

    const [oneCharacter, setOneCharacter] = useState()

    useEffect(() => {
        const url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358"
        axios.get(url)
        .then(res => setAllCharacters(res.data.data.results))
        .catch(err => console.log(err))
      }, [])

      console.log(allCharacters);

    //   useEffect(() => {
    //     const url = `https://gateway.marvel.com:443/v1/public/characters/1011334?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358`
    //     axios.get(url)
    //     .then(res => setOneCharacter(res.data.data.results))
    //     .catch(err => console.log(err))
    //  }, [])


    
    const handleClick = (id) => {
        const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1c4aee6a89f573f35cc57ee82e6d38e9&hash=e68f993ec5edf7d29585345c28df9358`
        axios.get(url)
        .then(res => setOneCharacter(res.data.data.results))
        .catch(err => console.log(err))
    }

    console.log(oneCharacter);
      

  return (
    <div className='container__cards'>
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
    </div>
  )
}

export default CardCharacter