import React, { Component } from "react";
import Input from "./Input";
import "./styles/ContactInfo.css";

export default class ContactInfo extends Component {
  render() {
    return (
      <div>
        <Input className="omo">Linkedin Username</Input>
      </div>
    );
  }
}
