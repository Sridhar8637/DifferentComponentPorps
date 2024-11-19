import React from "react";
import './funcomponent.css'

let Funcomponent = (props) => {
  return (
    <div>
      <div id="component">
        {props.item.map((item) => {
          return (
              <div key={item.id} className="CartHolder">
                  <img src={item.imgages} alt={item.title}  id="cartImg"/>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>{item.hotel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Funcomponent;
