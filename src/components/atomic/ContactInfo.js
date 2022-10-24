import React, { Component } from "react";
import Input from "./Input";
import styles from "./styles/ContactInfo.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default class ContactInfo extends Component {
  constructor(props) {
    super(props);
    // this.setState= {
    //   svg: props.svg,
    // }
  }
  render() {
    const { svg } = this.props;
    return (
      <div className={styles.contact}>
        {svg ? svg : <LinkedInIcon />}
        <Input>Linkedin Username</Input>
      </div>
    );
  }
}
