import React, { Component } from "react";
import Input from "../atomic/Input";
import styles from "./styles/skills.module.css";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-card">
        <h2>Skills</h2>
        <div className={styles.contactInfo__section}>
          <Input>
            <p>Reactjs, Typescript, Nodejs, python, HTML, CSS, Next.js</p>
          </Input>
        </div>
      </div>
    );
  }
}
