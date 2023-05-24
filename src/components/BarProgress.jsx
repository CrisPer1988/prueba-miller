import React from 'react'
import "./styles/barProgress.css"

const BarProgress = ({oneCharacter}) => {

    const dataOne = oneCharacter?.map(char => {
        return char.series.available
    })

    console.log(dataOne);
    


  return (
    <div className='content__bar'>
        
 <div className='bar__progress'
            style={{
                background: `linear-gradient(90deg, #77dad4 0, #b0e3e0 ${dataOne}%, rgb(231, 231, 231) ${dataOne}% 100%)`,
              }}
            >

            </div> 
            <div>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit ab expedita doloremque. Quis quasi soluta voluptas ipsam unde eos non dolorum? Ullam fugit voluptatem repellat sapiente excepturi voluptates praesentium.</h3>
            </div>
            <div>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit ab expedita doloremque. Quis quasi soluta voluptas ipsam unde eos non dolorum? Ullam fugit voluptatem repellat sapiente excepturi voluptates praesentium.</h3>
            </div>
    </div>
  )
}

export default BarProgress