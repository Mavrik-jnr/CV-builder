import React, { Component } from "react";

import Contact from "../card/Contact";
import Skills from "../card/Skills";
import Education from "../card/Education";
import References from "../card/References";
import styles from "./styles/Sidebar.module.css";
export class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <Contact />
          <Skills />
          <Education />
          <References />
        </aside>
      </>
    );
  }
}

export default Sidebar;
