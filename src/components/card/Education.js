import React, { Component } from "react";
import EducationInfo from "../atomic/EducationInfo";
import styles from "./styles/education.module.css";

export default class Education extends Component {
  render() {
    return (
      <div className="Education-card">
        <h2>Education</h2>
        <div className={styles.contactInfo__section}>
          <EducationInfo />
          <EducationInfo />
          <EducationInfo />
        </div>
      </div>
    );
  }
}
