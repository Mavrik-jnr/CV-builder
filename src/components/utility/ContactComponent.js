import { Facebook } from "@mui/icons-material";
import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";

export default class ContactComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: ["contact", "contact", "contact", "contact", "contact"],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: [...this.state.count, "education"],
    });
  }
  decrement() {
    this.setState({
      count: this.state.count.length === 1 ? [] : this.state.count.slice(1),
    });
  }
  render() {
    return (
      <>
        {this.state.count.map((element) => {
          return <ContactInfo svg={<Facebook />} />;
        })}
      </>
    );
  }
}
