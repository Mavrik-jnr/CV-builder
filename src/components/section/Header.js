import React, { Component } from "react";
import Input from "../atomic/Input";

import "./styles/Header.css";
export class Header extends Component {
  constructor() {
    super();
    this.showElement = this.showElement.bind(this);
  }
  showElement(e) {
    console.log(e.currentTarget.textContent.length);
  }
  render() {
    return (
      <header>
        <h1>harry Griffiths</h1>
        <h3>Job Title</h3>
        <h2>profile</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          similique numquam dolor molestias corporis praesentium repudiandae
          vero eos tempora at! Soluta iusto corrupti ab fuga ratione ipsa
          accusamus a placeat.
        </p>
        <Input>
          Helloo00 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Itaque atque, quaerat expedita sequi quidem molestiae? Rerum
          consectetur vitae iste, consequatur expedita incidunt. Vero neque eum
          molestias delectus magni nam omnis?
        </Input>
      </header>
    );
  }
}

export default Header;
