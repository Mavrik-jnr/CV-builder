import React, { Component } from "react";
import EducationInfo from "../atomic/EducationInfo";
import styles from "./styles/educationcomponent.module.css";

export default class EducationComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: ["education", "education"],
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
          return <EducationInfo />;
        })}
      </>
    );
  }
}
