import React, { Component } from "react";

import styles from "./styles/Sidebar.module.css";
import SidebarComponent from "../utility/SidebarComponent";
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
