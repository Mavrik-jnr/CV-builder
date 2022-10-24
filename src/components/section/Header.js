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
        <Input>
          <h3>Job Title</h3>
        </Input>
        <h2>profile</h2>
        <Input>
          <p>
            Write a short brief introduction of just a few paragraphs explaining
            exactly who you are, your strengths and why you feel you are such a
            suitable candidate. Try to write it in the third person. Here is a
            good example; "A champion of best practice who is organised and also
            has the required level of skills needed to make every customer fell
            special. A superb communicator who is able to get along with people
            from all social backgrounds. (your name) is currently looking for a
            suitable position with a reputable company where they will be able
            to build a long term career and future for themselves."
          </p>
        </Input>
      </header>
    );
  }
}

export default Header;
