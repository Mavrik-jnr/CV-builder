import { Facebook } from "@mui/icons-material";
import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import ContactComponent from "../utility/ContactComponent";
import styles from "./styles/contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <h2>Contact</h2>
        <div className={styles.contactInfo__section}>
          <ContactComponent />
        </div>
      </div>
    );
  }
}
