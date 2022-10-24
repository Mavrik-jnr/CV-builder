import React, { Component } from "react";
import Input from "./Input";
import styles from "./styles/EducationInfo.module.css";
export default class EducationInfo extends Component {
  render() {
    return (
      <div className={styles.info}>
        <div className={styles.info__school}>
          <Input>
            <p>School name</p>
          </Input>
          <div className={styles.year__section}>
            <Input>
              <p>year</p>
            </Input>
            -
            <Input>
              <p>year</p>
            </Input>
          </div>
        </div>
        <Input>
          <p>Course details</p>
        </Input>
      </div>
    );
  }
}
