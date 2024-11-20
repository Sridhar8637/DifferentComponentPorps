import React, { Component } from 'react'
import Funcomponent from './funcomponent'
import './funcomponent.css'

export class Classcomponent extends Component {
    
    render() {

        let ItemObj = [
            {
              id: 1,
              title: "Sambar Idly",
              type: "Veg",
              rating: 5.0,
              price: 120,
              hotel: "Perambur Srinivasa",
              imgages: "/images/food/sambaridly.jpg",
              isLiked:false
            },
            {
              id: 2,
              title: "Full Metals",
              type: "Veg",
              rating: 5.0,
              price: 160,
              hotel: "sangeetha",
              imgages: "/images/food/fullmeal.jpg",
              isLiked:false
            },
            {
              id: 3,
              title: "Chicken Biryani",
              type: "Non-Veg",
              rating: 5.0,
              price: 220,
              hotel: "Biryani Brothers",
              imgages: "/images/food/sukkucb.jpg",
              isLiked:false
            }
        ]

    return (
        <div>
            <h1>Food</h1>
            <Funcomponent item={ItemObj} />
       </div>
    )
  }
}

export default Classcomponent


