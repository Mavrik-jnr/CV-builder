import React, { Component } from "react";
import Input from "../atomic/Input";
import styles from "./styles/references.module.css";

export default class References extends Component {
  render() {
    return (
      <div className={styles.References}>
        <h2>References</h2>
        <Input>
          <p>Add References here</p>
        </Input>
      </div>
    );
  }
}
