import React, { Component } from "react";
import EducationInfo from "../atomic/EducationInfo";
import EducationComponent from "../utility/EducationComponent";
import styles from "./styles/education.module.css";

export default class Education extends Component {
  render() {
    return (
      <div className={styles.Education}>
        <h2>Education</h2>
        <div className={styles.educationInfo__section}>
          <EducationComponent />
        </div>
      </div>
    );
  }
}
