import "./styles/App.css";

import React, { Component } from "react";
import Header from "./components/section/Header";
import Sidebar from "./components/section/Sidebar";
import Career from "./components/section/Career";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="cv-app">
          <div className="user-tab">
            <button id="preview">Preview Mode</button>
            <button id="edit">Edit Mode</button>
          </div>
          <main className="Resume">
            <article className="Resume-content">
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
