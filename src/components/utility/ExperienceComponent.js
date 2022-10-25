import React, { Component } from "react";
import CareerCard from "../card/CareerCard";
import styles from "./styles/experiencecomponent.module.css";
export default class ExperienceComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: ["career"],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: [...this.state.count, "career"],
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
        {/* <p onClick={() => this.increment()}>Add</p>
        <p onClick={() => this.decrement()}>Remove</p> */}
        {this.state.count.map((element) => {
          return <CareerCard />;
        })}
      </>
    );
  }
}
