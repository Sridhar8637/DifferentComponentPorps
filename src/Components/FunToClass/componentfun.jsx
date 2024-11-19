
import React from 'react'
import Componentclass from './componentclass'

const Componentfun = () => {
    const arrObj = [
        {
            id: 1,
            name: "BMW",
            price: 1000000,
            image: "/images/car/bwm.webp",
            country:'Made In Germany'
        },
        {
            id: 2,
            name: "Hyundai Creta",
            price: 100000,
            image: "/images/car/hyundaicreta.jpeg",
            country:'Made In Korea'
        },
        {
            id: 1,
            name: "Thar Roxx",
            price: 100000,
            image: "/images/car/tharroxx.webp",
            country:'Made In India'
        }

    ]
  return (
      <div>
        <h1>Cars</h1>
        <Componentclass Items={arrObj} />
     </div>
  )
}

export default Componentfun
