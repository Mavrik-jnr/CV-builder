import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import "./styles/Sidebar.css";
import { Facebook } from "@mui/icons-material";
export class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <h2>Contact</h2>
          <p>
            Sidebar Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Magnam similique numquam dolor molestias corporis praesentium
            repudiandae vero eos tempora at! Soluta iusto corrupti ab fuga
            ratione ipsa accusamus a placeat.
          </p>
          <ContactInfo svg={<Facebook />} />
        </aside>
      </>
    );
  }
}

export default Sidebar;
