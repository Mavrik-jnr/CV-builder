import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import styles from "./styles/Sidebar.module.css";
import { Facebook } from "@mui/icons-material";
export class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <h2>Contact</h2>
          <div className="contactInfo__section">
            <ContactInfo svg={<Facebook />} />
            <ContactInfo svg={<Facebook />} />
            <ContactInfo svg={<Facebook />} />
            <ContactInfo svg={<Facebook />} />
            <ContactInfo svg={<Facebook />} />
          </div>
        </aside>
      </>
    );
  }
}

export default Sidebar;
