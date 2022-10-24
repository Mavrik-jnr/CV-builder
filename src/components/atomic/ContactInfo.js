import React, { Component } from "react";
import Input from "./Input";
import styles from "./styles/ContactInfo.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactPhone } from "@mui/icons-material";

export default class ContactInfo extends Component {
  render() {
    const { svg } = this.props;
    return (
      <div className={styles.contact}>
        {svg ? svg : <ContactPhone />}
        <Input>Add Contact Info</Input>
      </div>
    );
  }
}
