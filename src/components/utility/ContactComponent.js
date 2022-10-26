import { Facebook } from "@mui/icons-material";
import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import { v4 as uuidv4 } from "uuid";

export default class ContactComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: [],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateText = this.updateText.bind(this);
  }
  increment() {
    this.setState({
      count: [...this.state.count, { id: uuidv4(), text: "" }],
    });
  }
  decrement(e) {
    let oldArray = [...this.state.count];
    let removedArray = oldArray.splice(e.target.getAttribute("gg"), 1);
    let filteredArray = oldArray.filter((element) => {
      return element.id !== e.target.getAttribute("id");
    });
    this.setState({
      count: filteredArray,
    });
  }
  updateText(e) {
    this.setState({
      count: [],
    });

    // this.state.count.map((element) => {
    //   if (element.id === e.target.getAttribute("id")) {
    //     this.setStateelement.text = e.target.textContent;
    //     return element;
    //   } else {
    //     return element;
    //   }
    // })
  }
  render() {
    return (
      <>
        <p onClick={this.increment}>Add</p>
        {this.state.count.map((element) => {
          return (
            <>
              <ContactInfo
                change={this.updateText}
                key={element.id}
                svg={<Facebook />}
                text={element.text}
              />
              <span onClick={(e) => this.decrement(e)} id={element.id}>
                Remove
              </span>
            </>
          );
        })}
      </>
    );
  }
}
