import React, { Component } from "react";
import "./styles/Input.css";
export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      contentEditable: "",
    };
    this.showElement = this.showElement.bind(this);
    this.edit = this.edit.bind(this);
  }

  showElement(e) {
    // console.log(e);

    if (parseInt(e.currentTarget.textContent.length) >= this.props.limit) {
      this.setState({
        contentEditable: "false",
      });
      e.currentTarget.textContent = e.currentTarget.textContent.slice(0, -1);
    } else {
      this.setState({
        contentEditable: "true",
      });
    }
  }
  edit(e) {
    this.setState({
      contentEditable: "true",
    });
  }
  render() {
    return (
      <div
        onInput={(e) => this.showElement(e)}
        onClick={this.edit}
        contentEditable={this.state.contentEditable}
        suppressContentEditableWarning={true}
        className={`inputElement  ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Input;
