import React, { Component } from "react";
import Contact from "../card/Contact";
import Education from "../card/Education";
import References from "../card/References";
import Skills from "../card/Skills";
import styles from "./styles/sidebarcomponent.module.css";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export default class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      cards: ["contact", "education"],
      cardsMenu: ["contact", "skills", "education", "references"],
      display: "",
    };
    this.setCard = this.setCard.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  setCard(e) {
    //setting logic

    let card = e.target.textContent;
    if (this.state.cards.includes(card)) {
      return;
    } else {
      this.setState({
        cards: [...this.state.cards, card],
      });
    }
  }
  removeCard(card) {
    this.setState({
      cards: this.state.cards.filter((element) => element !== card),
    });
  }
  setDisplay(e) {
    if (this.state.display === "") {
      this.setState({
        display: "block",
      });
    } else {
      this.setState({
        display: "",
      });
    }
  }
  render() {
    return (
      <>
        <LibraryAddIcon onClick={this.setDisplay} className={styles.dropDown} />

        <div
          // style={{ display: `${this.state.display}` }}
          display={this.state.display}
          className={styles.menu}
        >
          {this.state.cardsMenu.map((card) => {
            return (
              <div
                className={styles.menuItem}
                onClick={(e) => {
                  this.setCard(e);
                  this.setDisplay();
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
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
