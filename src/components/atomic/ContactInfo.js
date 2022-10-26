import React, { Component } from "react";
import Input from "./Input";
import styles from "./styles/ContactInfo.module.css";
import { ContactPhone } from "@mui/icons-material";

export default class ContactInfo extends Component {
  render() {
    const { svg, text } = this.props;
    return (
      <div className={styles.contact}>
        {svg ? svg : <ContactPhone />}
        <Input>
          <p>{text ? text : "Add Contact Info"}</p>
        </Input>
      </div>
    );
  }
}
