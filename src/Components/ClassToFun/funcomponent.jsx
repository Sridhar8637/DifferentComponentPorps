import React, { useState } from "react";
import "./funcomponent.css";
import { FaHeart } from "react-icons/fa";
import {  MdDeleteOutline } from "react-icons/md";

let Funcomponent = (props) => {

  let [obj, setObj] = useState(props.item);
  let [isLiked, setIsLiked] = useState(false);
 

  const deleteItem = (id) => {
    let DeletedObj = obj.filter((item) => {
      return (item.id !== id);
    });
    setObj(DeletedObj);
  }

  const likeItem = (id) => {
    obj.map((item) => {
      if (item.id === id) {
        item.isLiked = !item.isLiked;
        setIsLiked(!isLiked);
      }
      return item;
    })
    
  }

  return (
    <div>
      <div id="component">
        {obj.map((item) => {
          return (
            <div key={item.id} className="CartHolder">
              <img src={item.imgages} alt={item.title} id="cartImg" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p>{item.hotel}</p>
              <div id="cartBut">
                <button className="Likebtn" onClick={() => likeItem(item.id)}><FaHeart style={{ color: item.isLiked ? "red" : "white" }} /><p>{item.isLiked ? "Liked" : "Like"}</p></button>
                <button className="Deletebtn" onClick={() => deleteItem(item.id)}>< MdDeleteOutline/><p>Delete</p></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Funcomponent;
