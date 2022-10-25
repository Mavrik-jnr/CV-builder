import React, { Component } from "react";
import Contact from "../card/Contact";
import Education from "../card/Education";
import References from "../card/References";
import Skills from "../card/Skills";
import styles from "./styles/sidebarcomponent.module.css";

export default class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      cards: ["contact", "skills", "education", "references"],
    };
    this.setCard = this.setCard.bind(this);
  }

  setCard(card) {
    //setting logic
    if (this.state.cards.includes(card)) {
      return;
    } else {
      this.setState({
        cards: this.state.cards.append(card),
      });
    }
  }
  removeCard(card) {
    this.setState({
      cards: this.state.cards.filter((element) => element !== card),
    });
  }
  render() {
    return (
      <>
        {this.state.cards.map((element) => {
          if (element === "contact") {
            return <Contact />;
          } else if (element === "skills") {
            return <Skills />;
          } else if (element === "education") {
            return <Education />;
          } else if (element === "references") {
            return <References />;
          } else {
            return undefined;
          }
        })}
      </>
    );
  }
}
