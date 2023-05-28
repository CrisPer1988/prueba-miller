import React, { useEffect } from 'react'
import "./styles/barProgress.css"

const BarProgress = ({progress}) => {



  return (
    <div className="container__progress">
    {progress >= 0 && (
    <div className="content__barra">
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(90deg, #10dad4 0, #50dad4 ${progress}%, rgb(231, 231, 231) ${progress}% 100%)`,
        }}
      >
        BARRA PROGRESIVA
      </div>
      </div>
    )
    
    }
    <div>
      <h3>Video</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis deserunt adipisci veniam vel explicabo impedit sint fuga iure suscipit! Facilis veniam commodi quod velit magnam, tempora rerum accusamus nam?</p>
    </div>
    <div>
      <h3>Imagen</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, qui? Ipsam obcaecati provident molestias unde ducimus sint consectetur natus accusantium beatae quisquam quam, cum itaque illo voluptatibus commodi magni veniam.</p>
    </div>
    
    </div>

    
  )
}

export default BarProgress