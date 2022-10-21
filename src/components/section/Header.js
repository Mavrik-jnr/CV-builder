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
        Header
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          similique numquam dolor molestias corporis praesentium repudiandae
          vero eos tempora at! Soluta iusto corrupti ab fuga ratione ipsa
          accusamus a placeat.
        </p>
        <Input limit={10} />
      </header>
    );
  }
}

export default Header;
