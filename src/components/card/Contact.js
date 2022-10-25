import { Facebook } from "@mui/icons-material";
import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import styles from "./styles/contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-card">
        <h2>Contact</h2>
        <div className={styles.contactInfo__section}>
          <ContactInfo svg={<Facebook />} />
          <ContactInfo svg={<Facebook />} />
          <ContactInfo svg={<Facebook />} />
          <ContactInfo svg={<Facebook />} />
          <ContactInfo svg={<Facebook />} />
        </div>
      </div>
    );
  }
}
