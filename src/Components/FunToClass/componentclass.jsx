import React, { Component } from "react";
import './componentclass.css';


class Componentclass extends Component {
  render() {
    console.log(this.props.Items);
      return <div>
        <div id="component">
          {
            this.props.Items.map((item) => {
              return (
                <div key={item.id} className="CartHolder">
                  <img src={item.image} alt={item.name} id="cartImg"/>
                  <h6>{item.name}</h6>
                  <h6>${item.price}</h6>
                  <p>{item.country}</p>
                </div>
              )
            })
           }
        </div>
      </div>;
  }
}

export default Componentclass;


