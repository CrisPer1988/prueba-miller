import React, {  useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'

//public: 1c4aee6a89f573f35cc57ee82e6d38e9
//private: 7ca0c6192b07d1ed814a3df2d0bcdd917ae53af9

//17ca0c6192b07d1ed814a3df2d0bcdd917ae53af91c4aee6a89f573f35cc57ee82e6d38e9
//hash: e68f993ec5edf7d29585345c28df9358

function App() {
  const [allCharacters, setAllCharacters] = useState()

  return (
    <>
      <CardCharacter
      allCharacters={allCharacters}
      setAllCharacters={setAllCharacters}
       />
    </>
  )
}

export default App
