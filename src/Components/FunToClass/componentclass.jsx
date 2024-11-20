import React, { Component } from "react";
import "./componentclass.css";
import { FaHeart } from "react-icons/fa";
import {  MdDeleteOutline } from "react-icons/md";

class Componentclass extends Component {
  constructor(props) {
    super()
    this.state = {
      Isliked:false,
      items: props.Items
    };
  }
  render() {
    let likeItem = (id) => {
      let UpdatedObj = this.state.items.map((item) => {
        if (item.id === id) {
          item.Liked = !item.Liked  
        }
        return item;
      })
      this.setState({
        items: UpdatedObj
      });
      
      //console.log(UpdatedObj);
    }
    let deleteItem = (id) => {
      let UpdatedObj = this.state.items.filter((item) => {
        return item.id !== id
      });
      this.setState({
        items: UpdatedObj
      });
    }
    //console.log(this.state.items);
    return (
      <div>
        <div id="component">
          {this.state.items.map((item) => {
            return (
              <div key={item.id} className="CartHolder">
                <img src={item.image} alt={item.name} id="cartImg" />
                <h6>{item.name}</h6>
                <h6>${item.price}</h6>
                <p>{item.country}</p>
                <div id="cartBut">
                  <button className="Likebtn" onClick={() => likeItem(item.id)}>
                    <FaHeart
                      style={{ color: item.Liked ? "red" : "white" }}
                    />
                    <p>{item.Liked ? "Liked" : "Like"}</p>
                  </button>
                  <button
                    className="Deletebtn"
                    onClick={() => deleteItem(item.id)}
                  >
                    <MdDeleteOutline />
                    <p>Delete</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Componentclass;
