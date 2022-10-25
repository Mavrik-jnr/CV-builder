import React, { Component } from "react";

import styles from "./styles/Sidebar.module.css";
import SidebarComponent from "../utility/SidebarComponent";
import EducationComponent from "../utility/EducationComponent";
export class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <SidebarComponent />
        </aside>
      </>
    );
  }
}

export default Sidebar;
