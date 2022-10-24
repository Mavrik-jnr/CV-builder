import React, { Component } from "react";
import Input from "./Input";
import styles from "./styles/ContactInfo.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default class ContactInfo extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <LinkedInIcon />
        <Input>Linkedin Username</Input>
      </div>
    );
  }
}
