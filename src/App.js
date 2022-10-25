import styles from "./styles/App.module.css";

import React, { Component } from "react";
import Header from "./components/section/Header";
import Sidebar from "./components/section/Sidebar";
import Career from "./components/section/Career";

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <section className={styles.cv}>
          <div className={styles.user}>
            <button id={styles.preview}>Preview Mode</button>
            <button id={styles.edit}>Edit Mode</button>
          </div>
          <main className={styles.Resume}>
            <article className={styles.ResumeContent}>
              <Header />
              <Sidebar />
              <Career />
            </article>
          </main>
        </section>
      </div>
    );
  }
}

export default App;
