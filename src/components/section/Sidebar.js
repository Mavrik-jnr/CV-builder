import React, { Component } from "react";
import ContactInfo from "../atomic/ContactInfo";
import styles from "./styles/Sidebar.module.css";
import { Facebook } from "@mui/icons-material";
import EducationInfo from "../atomic/EducationInfo";
import Input from "../atomic/Input";
export class Sidebar extends Component {
  render() {
    return (
      <>
        <aside>
          <div className="contact-card">
            <h2>Contact</h2>
            <div className={styles.contactInfo__section}>
              <ContactInfo svg={<Facebook />} />
              <ContactInfo svg={<Facebook />} />
              <ContactInfo svg={<Facebook />} />
              <ContactInfo svg={<Facebook />} />
              <ContactInfo svg={<Facebook />} />
            </div>
          </div>
          <div className="skills-card">
            <h2>Skills</h2>
            <div className={styles.contactInfo__section}>
              <Input>
                <p>Reactjs, Typescript, Nodejs, python, HTML, CSS, Next.js</p>
              </Input>
            </div>
          </div>
          <div className="Education-card">
            <h2>Education</h2>
            <div className={styles.contactInfo__section}>
              <EducationInfo />
              <EducationInfo />
              <EducationInfo />
            </div>
          </div>
          <div className="References-card">
            <h2>References</h2>
            <p>Add References here</p>
          </div>
        </aside>
      </>
    );
  }
}

export default Sidebar;
