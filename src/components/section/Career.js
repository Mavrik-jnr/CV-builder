import React, { Component } from "react";
import CareerCard from "../card/CareerCard";

import styles from "./styles/Career.module.css";
export class Career extends Component {
  render() {
    return (
      <div className={styles.career__section}>
        <h2>Career</h2>
        <CareerCard />
        <CareerCard />
        <CareerCard />
      </div>
    );
  }
}

export default Career;
