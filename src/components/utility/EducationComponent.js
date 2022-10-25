import React, { Component } from "react";
import EducationInfo from "../atomic/EducationInfo";
import styles from "./styles/educationcomponent.module.css";

export default class EducationComponent extends Component {
  render() {
    return (
      <>
        <EducationInfo />
        <EducationInfo />
        <EducationInfo />
      </>
    );
  }
}
